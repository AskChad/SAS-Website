/**
 * GoHighLevel Calendar Appointment Creation
 *
 * Serverless function to create appointments in GoHighLevel Calendar
 * Connects to GHL V2 API with calendar integration
 *
 * @endpoint POST /api/ghl-calendar
 * @param {Object} req.body - Appointment data
 * @param {string} req.body.contactId - GHL contact ID from contact creation
 * @param {string} req.body.date - Date string (e.g., "Wed Dec 11 2025")
 * @param {string} req.body.time - Time string (e.g., "10:00 AM")
 * @param {string} req.body.type - Meeting duration ("30" or "60" minutes)
 * @param {string} req.body.communication - Communication method (Phone/Zoom/Teams)
 * @param {string} req.body.notes - Additional notes from user
 * @param {Object} req.body.contact - Contact information
 * @param {Object} req.body.aiAssessment - AI assessment data for context
 *
 * @returns {Object} Response with success status and appointment details
 */

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use POST.'
    });
  }

  try {
    const {
      contactId,
      date,
      time,
      slotTime, // Optional: exact ISO timestamp from free-slots API
      type,
      communication,
      notes,
      contact,
      aiAssessment
    } = req.body;

    // ======================================
    // VALIDATION
    // ======================================

    if (!contactId) {
      return res.status(400).json({
        success: false,
        error: 'Missing contactId. Contact must be created before booking appointment.'
      });
    }

    if (!slotTime && (!date || !time)) {
      return res.status(400).json({
        success: false,
        error: 'Missing date/time for appointment. Provide slotTime or both date and time.'
      });
    }

    // ======================================
    // ENVIRONMENT VARIABLES
    // ======================================

    const GHL_API_KEY = process.env.GHL_API_KEY;
    const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID;
    const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

    if (!GHL_API_KEY || !GHL_CALENDAR_ID || !GHL_LOCATION_ID) {
      console.error('Missing environment variables:', {
        hasApiKey: !!GHL_API_KEY,
        hasCalendarId: !!GHL_CALENDAR_ID,
        hasLocationId: !!GHL_LOCATION_ID
      });
      return res.status(500).json({
        success: false,
        error: 'Server configuration error. Please contact support.'
      });
    }

    // ======================================
    // DATE/TIME CONVERSION
    // ======================================

    let startTime, endTime;
    const durationMinutes = parseInt(type) || 30; // Default to 30 minutes

    // If slotTime is provided (exact ISO from free-slots API), use it directly
    if (slotTime) {
      startTime = slotTime;
      const endDateObj = new Date(slotTime);
      endDateObj.setMinutes(endDateObj.getMinutes() + durationMinutes);
      endTime = endDateObj.toISOString();
    } else {
      // Legacy: Convert date string and time string to ISO 8601 format
      const dateObj = new Date(date);

      // Parse time (handles both 12-hour and 24-hour format)
      const timeParts = time.match(/(\d+):(\d+)\s*(AM|PM)?/i);
      if (!timeParts) {
        return res.status(400).json({
          success: false,
          error: 'Invalid time format. Expected format: "10:00 AM" or "14:00"'
        });
      }

      let hours = parseInt(timeParts[1]);
      const minutes = parseInt(timeParts[2]);
      const meridian = timeParts[3];

      // Convert to 24-hour format if needed
      if (meridian) {
        if (meridian.toUpperCase() === 'PM' && hours !== 12) {
          hours += 12;
        } else if (meridian.toUpperCase() === 'AM' && hours === 12) {
          hours = 0;
        }
      }

      dateObj.setHours(hours, minutes, 0, 0);
      startTime = dateObj.toISOString();

      const endDateObj = new Date(dateObj);
      endDateObj.setMinutes(endDateObj.getMinutes() + durationMinutes);
      endTime = endDateObj.toISOString();
    }

    // ======================================
    // BUILD APPOINTMENT TITLE & NOTES
    // ======================================

    const appointmentTitle = `Strategy Call - ${contact?.name || 'Quiz Lead'}`;

    const appointmentNotes = `
${communication} Call - ${type} minutes

AI Readiness Score: ${aiAssessment?.readinessScore || 'N/A'}
Projected Annual ROI: $${aiAssessment?.roiData?.annualSavings?.toLocaleString() || 'N/A'}

Contact Information:
- Name: ${contact?.name || 'N/A'}
- Email: ${contact?.email || 'N/A'}
- Phone: ${contact?.phone || 'N/A'}

User Notes: ${notes || 'None provided'}

Source: SAS Website AI Assessment Quiz
    `.trim();

    // ======================================
    // CALL GOHIGHLEVEL CALENDAR API
    // ======================================

    console.log('Creating appointment in GHL Calendar...', {
      calendarId: GHL_CALENDAR_ID,
      contactId: contactId,
      startTime: startTime,
      duration: durationMinutes
    });

    const appointmentPayload = {
      calendarId: GHL_CALENDAR_ID,
      locationId: GHL_LOCATION_ID,
      contactId: contactId,
      startTime: startTime,
      endTime: endTime,
      title: appointmentTitle,
      appointmentStatus: 'confirmed',
      assignedUserId: null, // Auto-assign based on calendar settings
      address: communication === 'Phone' ? 'Phone Call' : `${communication} Meeting`,
      ignoreDateRange: false,
      toNotify: true, // Send confirmation email
      notes: appointmentNotes
    };

    const ghlResponse = await fetch(
      'https://services.leadconnectorhq.com/calendars/events/appointments',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GHL_API_KEY}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28'
        },
        body: JSON.stringify(appointmentPayload)
      }
    );

    const responseData = await ghlResponse.json();

    // ======================================
    // HANDLE RESPONSE
    // ======================================

    if (!ghlResponse.ok) {
      console.error('GHL Calendar API Error:', {
        status: ghlResponse.status,
        statusText: ghlResponse.statusText,
        response: responseData
      });

      return res.status(ghlResponse.status).json({
        success: false,
        error: responseData.message || responseData.error || 'Failed to create appointment in GoHighLevel',
        details: responseData
      });
    }

    console.log('✅ Appointment created successfully:', responseData);

    // ======================================
    // SUCCESS RESPONSE
    // ======================================

    return res.status(200).json({
      success: true,
      appointmentId: responseData.id || responseData._id,
      message: 'Appointment created successfully',
      appointment: {
        id: responseData.id || responseData._id,
        title: appointmentTitle,
        startTime: startTime,
        endTime: endTime,
        duration: durationMinutes,
        status: 'confirmed',
        contactId: contactId,
        calendarId: GHL_CALENDAR_ID
      }
    });

  } catch (error) {
    console.error('Calendar API Error:', error);

    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
