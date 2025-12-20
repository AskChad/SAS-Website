/**
 * GoHighLevel AI Call Request API
 * ================================
 *
 * Serverless function to create/update contacts in GoHighLevel CRM
 * from "AI Call Me" form submissions.
 *
 * @route POST /api/ghl-ai-call
 * @param {Object} req.body - Request payload
 * @param {string} req.body.name - Contact name (required)
 * @param {string} req.body.phone - Contact phone (required)
 * @param {string} req.body.business - Business type (optional)
 * @param {string} req.body.website - Website URL (optional)
 * @param {string} req.body.question - User question (optional)
 *
 * @returns {Object} Success response with contact ID
 * @returns {Object} Error response with error message
 */

export default async function handler(req, res) {
  // CORS headers - allow requests from any origin
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
    const { name, phone, business, website, question } = req.body;

    // Validation - ensure required fields are present
    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name and phone are required'
      });
    }

    // Validate phone format
    const phoneRegex = /^[\+]?[1-9][\d\-\(\)\s]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid phone number format'
      });
    }

    // Format phone number (add +1 country code if not present)
    const formattedPhone = phone.startsWith('+') ?
      phone :
      `+1${phone.replace(/\D/g, '')}`;

    // Extract lastName from name if present
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || 'Unknown';

    // Generate tags for AI Call requests
    const tags = [
      'AI Call Request',
      'Source: Website AI Call Form',
      'Lead Type: Immediate Interest'
    ];

    // Add business type tag if provided
    if (business) {
      const businessLabels = {
        'solar': 'Industry: Solar',
        'roofing': 'Industry: Roofing',
        'new-homes': 'Industry: New Homes',
        'auto': 'Industry: Automotive',
        'healthcare': 'Industry: Healthcare',
        'other': 'Industry: Other Services'
      };
      tags.push(businessLabels[business] || 'Industry: Unknown');
    }

    // Format custom fields
    const customFields = [];

    // Business type
    if (business) {
      customFields.push({
        key: 'business_type',
        field_value: business
      });
    }

    // Note: Website is a standard GHL field, not custom field

    // User question/inquiry
    if (question) {
      customFields.push({
        key: 'ai_call_question',
        field_value: question
      });
    }

    // Submission timestamp
    customFields.push({
      key: 'ai_call_request_date',
      field_value: new Date().toLocaleString('en-US')
    });

    // Build GoHighLevel API payload
    const ghlPayload = {
      locationId: process.env.GHL_LOCATION_ID,
      firstName: firstName,
      lastName: lastName,
      phone: formattedPhone,
      ...(website && { website: website }), // Standard field, not custom
      tags: tags,
      customFields: customFields,
      source: 'SAS Website - AI Call Request'
    };

    console.log('Sending AI Call request to GHL:', JSON.stringify(ghlPayload, null, 2));

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
            body: JSON.stringify(ghlPayload)
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || data.error || 'GHL API request failed');
        }

        // Success! Extract contact ID from response
        const contactId = data.contact?.id || data.id;

        console.log('✅ AI Call contact created in GHL:', contactId);

        return res.status(200).json({
          success: true,
          message: 'AI Call request received and contact created in GHL',
          contactId: contactId,
          tags: tags
        });

      } catch (error) {
        lastError = error;
        console.error(`Attempt ${attempts} failed:`, error.message);

        // If this isn't the last attempt, wait before retrying (exponential backoff)
        if (attempts < maxAttempts) {
          await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempts) * 1000));
        }
      }
    }

    // All retry attempts failed
    throw lastError;

  } catch (error) {
    console.error('AI Call API Error:', error);

    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
