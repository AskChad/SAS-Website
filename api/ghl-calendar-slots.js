/**
 * GoHighLevel Calendar Free Slots
 *
 * Fetches available time slots from GHL Calendar
 *
 * @endpoint GET /api/ghl-calendar-slots?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD
 */

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use GET.'
    });
  }

  try {
    const GHL_API_KEY = process.env.GHL_API_KEY;
    const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID;

    if (!GHL_API_KEY || !GHL_CALENDAR_ID) {
      return res.status(500).json({
        success: false,
        error: 'Server configuration error.'
      });
    }

    // Get date range - GHL API expects timestamps in milliseconds
    const today = new Date();
    const defaultStart = new Date(today);
    defaultStart.setDate(defaultStart.getDate() + 1); // Tomorrow
    defaultStart.setHours(0, 0, 0, 0);
    const defaultEnd = new Date(today);
    defaultEnd.setDate(defaultEnd.getDate() + 14); // 2 weeks out
    defaultEnd.setHours(23, 59, 59, 999);

    const startDate = req.query.startDate || defaultStart.getTime();
    const endDate = req.query.endDate || defaultEnd.getTime();

    console.log('Fetching free slots:', { calendarId: GHL_CALENDAR_ID, startDate, endDate });

    const url = `https://services.leadconnectorhq.com/calendars/${GHL_CALENDAR_ID}/free-slots?startDate=${startDate}&endDate=${endDate}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28'
      }
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('GHL Free Slots API Error:', data);
      return res.status(response.status).json({
        success: false,
        error: data.message || 'Failed to fetch free slots',
        details: data
      });
    }

    return res.status(200).json({
      success: true,
      slots: data,
      calendarId: GHL_CALENDAR_ID,
      dateRange: { startDate, endDate }
    });

  } catch (error) {
    console.error('Calendar Slots API Error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error'
    });
  }
}
