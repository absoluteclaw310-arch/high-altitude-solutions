/**
 * Google Apps Script for High Altitude Solutions Contact Form
 * 
 * DEPLOYMENT INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Paste this entire code into the editor
 * 4. Click "Deploy" → "New deployment"
 * 5. Select type: "Web app"
 * 6. Execute as: "Me"
 * 7. Who has access: "Anyone" (this allows the public form to submit)
 * 8. Click "Deploy" and copy the Web App URL
 * 9. Use that URL in your Next.js contact form
 * 
 * SPREADSHEET SETUP:
 * The script will auto-create a sheet with these columns:
 * Timestamp | Name | Email | Phone | Service | Message | Status
 */

// Configuration
const SHEET_NAME = 'Contact Submissions';
const SPREADSHEET_ID = ''; // Leave empty to auto-create, or paste your existing sheet ID

/**
 * Main entry point for POST requests
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.name || !data.email) {
      return jsonResponse({
        success: false,
        error: 'Name and email are required'
      }, 400);
    }
    
    // Get or create spreadsheet
    const ss = getOrCreateSpreadsheet();
    const sheet = getOrCreateSheet(ss);
    
    // Append the submission
    appendRow(sheet, data);
    
    // Return success
    return jsonResponse({
      success: true,
      message: 'Submission received',
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error processing submission:', error);
    return jsonResponse({
      success: false,
      error: 'Failed to process submission'
    }, 500);
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return jsonResponse({
    status: 'High Altitude Solutions Contact Form API',
    message: 'Send POST requests to submit contact forms'
  });
}

/**
 * Get existing spreadsheet or create new one
 */
function getOrCreateSpreadsheet() {
  if (SPREADSHEET_ID) {
    return SpreadsheetApp.openById(SPREADSHEET_ID);
  }
  
  // Create new spreadsheet
  const ss = SpreadsheetApp.create('High Altitude Solutions - Contact Submissions');
  console.log('Created new spreadsheet:', ss.getUrl());
  return ss;
}

/**
 * Get or create the submissions sheet with headers
 */
function getOrCreateSheet(ss) {
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    
    // Add headers
    const headers = [
      'Timestamp',
      'Name',
      'Email',
      'Phone',
      'Service',
      'Message',
      'Status',
      'Notes'
    ];
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format header row
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#1e3a5f');
    headerRange.setFontColor('#ffffff');
    
    // Set column widths
    sheet.setColumnWidth(1, 150); // Timestamp
    sheet.setColumnWidth(2, 150); // Name
    sheet.setColumnWidth(3, 200); // Email
    sheet.setColumnWidth(4, 120); // Phone
    sheet.setColumnWidth(5, 150); // Service
    sheet.setColumnWidth(6, 300); // Message
    sheet.setColumnWidth(7, 100); // Status
    sheet.setColumnWidth(8, 200); // Notes
    
    // Freeze header row
    sheet.setFrozenRows(1);
  }
  
  return sheet;
}

/**
 * Append a new row to the sheet
 */
function appendRow(sheet, data) {
  const row = [
    new Date(),           // Timestamp
    data.name || '',      // Name
    data.email || '',     // Email
    data.phone || '',     // Phone
    data.service || '',   // Service
    data.message || '',   // Message
    'New',                // Status
    ''                    // Notes
  ];
  
  sheet.appendRow(row);
}

/**
 * Return JSON response with CORS headers
 */
function jsonResponse(data, statusCode = 200) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON)
    .setResponseHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

/**
 * Optional: Function to get all submissions (for admin use)
 */
function getAllSubmissions() {
  const ss = getOrCreateSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    return [];
  }
  
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const rows = data.slice(1);
  
  return rows.map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header.toLowerCase().replace(/\s/g, '_')] = row[index];
    });
    return obj;
  });
}