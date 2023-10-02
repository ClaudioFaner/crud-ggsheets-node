
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');
const creds = require('./credentials.json');
const { google } = require('googleapis');
//const { guardarVideo } = require('./controllers/expedientesControllers');
const sheetId = '1Mw7eXhp7t9DUCXWGzLZDjkmQ-pg6eyHtNSPXx2fdR4w'
const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',
  ];
  
  async function accederGoogleSheet() {

  const jwt = new JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: SCOPES,
  });
  const doc = new GoogleSpreadsheet(sheetId, jwt);

  await doc.loadInfo(); // loads document properties and worksheets
  console.log('//// DOC TITLE //// ' + doc.title);
  //await doc.updateProperties({ title: 'renamed doc' });
  
  const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
  console.log('//// SHEET TITLE //// ' + sheet.title);
  console.log('//// ROW COUNT //// ' + sheet.rowCount);
  
  // adding / removing sheets
  //const newSheet = await doc.addSheet({ title: 'another sheet' });
  //await newSheet.delete();

  const registros = await sheet.getRows();
  //console.log(registros)

  return registros

}

async function guardarVideo(pObjeto) {
  console.log('//// pObjeto //// '+pObjeto)
  const jwt = new JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: SCOPES,
  });
  const doc = new GoogleSpreadsheet(sheetId, jwt);
  await doc.loadInfo();
  const sheet = doc.sheetsById[0];
  await sheet.addRow(pObjeto)
}

module.exports = {
    accederGoogleSheet: accederGoogleSheet,
    guardarVideo: guardarVideo
}