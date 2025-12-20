/**
 * GoHighLevel Contact Upsert API
 * ================================
 *
 * Serverless function to create/update contacts in GoHighLevel CRM
 * from AI assessment quiz submissions.
 *
 * @route POST /api/ghl-contact
 * @param {Object} req.body - Request payload
 * @param {string} req.body.firstName - Contact first name (required)
 * @param {string} req.body.email - Contact email (required)
 * @param {string} req.body.phone - Contact phone (optional)
 * @param {Object} req.body.quizData - Quiz submission data (required)
 *
 * @returns {Object} Success response with contact ID
 * @returns {Object} Error response with error message
 */

export default async function handler(req, res) {
  // CORS headers - allow requests from any origin (adjust in production)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use POST.'
    });
  }

  try {
    // Extract data from request body
    const { firstName, email, phone, website, quizData } = req.body;

    // Validation - ensure required fields are present
    if (!firstName || !email || !quizData) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: firstName, email, and quizData are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // Format phone number (add +1 country code if not present)
    const formattedPhone = phone ?
      (phone.startsWith('+') ? phone : `+1${phone.replace(/\D/g, '')}`) :
      null;

    // Extract lastName from firstName if present
    const nameParts = firstName.trim().split(' ');
    const actualFirstName = nameParts[0];
    const actualLastName = nameParts.slice(1).join(' ') || 'Unknown';

    // Generate tags based on quiz responses
    const tags = generateTags(quizData);

    // Format custom fields for GHL
    const customFields = formatCustomFields(quizData, website);

    // Build GoHighLevel API payload
    const ghlPayload = {
      locationId: process.env.GHL_LOCATION_ID,
      firstName: actualFirstName,
      lastName: actualLastName,
      email: email,
      ...(formattedPhone && { phone: formattedPhone }),
      ...(website && { website: website }), // Standard field, not custom
      tags: tags,
      customFields: customFields,
      source: 'SAS Website Quiz'
    };

    console.log('Sending to GHL:', JSON.stringify(ghlPayload, null, 2));

    // Call GoHighLevel API with retry logic
    let attempts = 0;
    const maxAttempts = 3;
    let lastError;

    while (attempts < maxAttempts) {
      attempts++;

      try {
        const response = await fetch(
          'https://services.leadconnectorhq.com/contacts/upsert',
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
              'Content-Type': 'application/json',
              'Version': '2021-07-28'
            },
            body: JSON.stringify(ghlPayload),
            signal: AbortSignal.timeout(10000) // 10 second timeout
          }
        );

        const data = await response.json();

        if (!response.ok) {
          lastError = new Error(data.message || `GHL API error: ${response.status}`);

          // Don't retry on 4xx errors (client errors)
          if (response.status >= 400 && response.status < 500) {
            throw lastError;
          }

          // Retry on 5xx errors (server errors)
          if (attempts < maxAttempts) {
            console.log(`Attempt ${attempts} failed, retrying...`);
            await new Promise(resolve => setTimeout(resolve, 1000 * attempts)); // Exponential backoff
            continue;
          }

          throw lastError;
        }

        // Success! Return contact information
        console.log('GHL contact created/updated:', data.contact?.id);

        return res.status(200).json({
          success: true,
          contactId: data.contact?.id,
          message: 'Contact created/updated successfully'
        });

      } catch (error) {
        lastError = error;

        // If timeout or network error, retry
        if (attempts < maxAttempts && (error.name === 'AbortError' || error.name === 'TypeError')) {
          console.log(`Attempt ${attempts} failed (${error.name}), retrying...`);
          await new Promise(resolve => setTimeout(resolve, 1000 * attempts));
          continue;
        }

        throw error;
      }
    }

    // All attempts failed
    throw lastError;

  } catch (error) {
    console.error('GHL Integration Error:', error);

    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

/**
 * Generate tags based on quiz data
 *
 * Tags are used for segmentation and automation in GHL
 *
 * @param {Object} quizData - Quiz submission data
 * @returns {Array<string>} Array of tag strings
 */
function generateTags(quizData) {
  const tags = ['Website Quiz - AI Assessment'];

  // AI Readiness level tag
  const score = quizData.aiReadinessScore || 0;
  if (score >= 80) {
    tags.push('AI Readiness: Extremely High');
  } else if (score >= 60) {
    tags.push('AI Readiness: High');
  } else if (score >= 40) {
    tags.push('AI Readiness: Moderate');
  } else {
    tags.push('AI Readiness: Developing');
  }

  // Industry tag
  if (quizData.step1) {
    tags.push(`Industry: ${quizData.step1}`);
  }

  // Revenue tier tag
  const revenue = quizData.step3 || 0;
  if (revenue >= 10000000) {
    tags.push('Revenue: $10M+');
  } else if (revenue >= 2000000) {
    tags.push('Revenue: $2M-10M');
  } else if (revenue >= 500000) {
    tags.push('Revenue: $500K-2M');
  } else if (revenue >= 100000) {
    tags.push('Revenue: $100-500K');
  } else {
    tags.push('Revenue: <$100K');
  }

  // Lead quality score tag
  const isHighRevenue = revenue >= 500000;
  const isHighReadiness = score >= 60;

  if (isHighRevenue && isHighReadiness) {
    tags.push('Lead Quality: High Priority');
  } else if (revenue >= 100000 || score >= 40) {
    tags.push('Lead Quality: Medium');
  } else {
    tags.push('Lead Quality: Nurture');
  }

  // Current process tag (for segmentation)
  if (quizData.step5) {
    tags.push(`Current Process: ${quizData.step5}`);
  }

  return tags;
}

/**
 * Format custom fields for GoHighLevel
 *
 * Converts quiz data into GHL custom field format
 *
 * @param {Object} quizData - Quiz submission data
 * @param {string} website - Contact website URL (optional)
 * @returns {Array<Object>} Array of custom field objects
 */
function formatCustomFields(quizData, website) {
  const fields = [];

  // Business type
  if (quizData.step1) {
    fields.push({
      key: 'business_type',
      field_value: quizData.step1
    });
  }

  // Current challenges (array to comma-separated string)
  if (quizData.step2) {
    const challenges = Array.isArray(quizData.step2) ?
      quizData.step2.join(', ') :
      quizData.step2;
    fields.push({
      key: 'current_challenges',
      field_value: challenges
    });
  }

  // Annual revenue (formatted as range label)
  if (quizData.step3) {
    const revenue = quizData.step3;
    let revenueLabel;

    if (revenue >= 10000000) revenueLabel = '$10M+';
    else if (revenue >= 2000000) revenueLabel = '$2M-10M';
    else if (revenue >= 500000) revenueLabel = '$500K-2M';
    else if (revenue >= 100000) revenueLabel = '$100-500K';
    else revenueLabel = '<$100K';

    fields.push({
      key: 'annual_revenue',
      field_value: revenueLabel
    });
  }

  // Monthly lead volume
  if (quizData.leadVolumeInput) {
    fields.push({
      key: 'monthly_leads',
      field_value: quizData.leadVolumeInput.toString()
    });
  }

  // Current process level
  if (quizData.step5) {
    fields.push({
      key: 'current_process',
      field_value: quizData.step5
    });
  }

  // Team size (step6 is team size, not goals)
  if (quizData.step6) {
    const teamSize = Array.isArray(quizData.step6) ?
      quizData.step6.join(', ') :
      quizData.step6;
    fields.push({
      key: 'team_size',
      field_value: teamSize
    });
  }

  // AI readiness score (0-100)
  if (quizData.aiReadinessScore !== undefined) {
    fields.push({
      key: 'ai_readiness_score',
      field_value: quizData.aiReadinessScore.toString()
    });
  }

  // ROI projection (formatted as currency/year)
  if (quizData.roiProjection?.annualSavings) {
    const savings = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(quizData.roiProjection.annualSavings);

    fields.push({
      key: 'roi_projection',
      field_value: `${savings}/year`
    });
  }

  // Time savings (formatted hours)
  if (quizData.roiProjection?.timeSavedHours) {
    const hours = Math.round(quizData.roiProjection.timeSavedHours);
    fields.push({
      key: 'time_saved_annually',
      field_value: `${hours.toLocaleString()} hours`
    });
  }

  // Payback period (formatted months)
  if (quizData.roiProjection?.paybackMonths) {
    const months = quizData.roiProjection.paybackMonths.toFixed(1);
    fields.push({
      key: 'payback_period',
      field_value: `${months} months`
    });
  }

  // Submission timestamp
  if (quizData.submissionDate) {
    fields.push({
      key: 'quiz_submission_date',
      field_value: new Date(quizData.submissionDate).toLocaleString('en-US')
    });
  }

  // Note: Website is now a standard GHL field, passed in main payload

  return fields;
}
