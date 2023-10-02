const express = require('express');
const bodyParser = require('body-parser')
const expedientesRoutes = require('./routes/expedientesRoutes');
const app = express();
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//habilitar las peticiones put y delete
app.use(methodOverride('_method'))


app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/', expedientesRoutes)





module.exports = app
/*
const { google } = require('googleapis');  //ok indio
const expressLayouts = require('express-layouts'); 

const fetch = require('node-fetch');
app.use(expressLayouts);
app.set('view engine', 'ejs');  //ok indio

//Express body parser
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('dashboard')
});

const clientEmail =
'cuenta-de-servicio-330@my-project-330-400622.iam.gserviceaccount.com';
const privateKey =
"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDMTvu84trVy9hb\nnGr4Z18uMi6vlgmo6tLmGthyG/6+NSVhWnRC0YLWgIekBPuazO4VYB36W1yWhGOc\n77ysRMBOPCq8W48zPNRVd3EnIFk6GTB9gIFP8cmEc04RIwShq9y8h9dykGWA3ZZs\nq646jmeNKQ+vXGlbCPgDTXXE/SoRovKs6NCMJ6EwKKNGE57LqfmCeqGFC41Ix3hM\nJsdladYVyU5JvtaulAsdck2irXQsP4UZ7o7Iuz5qYg++RKkMKaE3paXdBVOKzr0L\ndbw2SyvUkDKJ2YTMPaOx18pTeGHy7uv3O0s3BKWw9gCAJe2ixKMJsTuum0sf1Dn8\nBYgtGT85AgMBAAECggEAB0cW+4r/LZd1zQmc291ezBf4hsOq82vt+EljhWkO4Xqm\nKrocoxawePCaJFMTHVgIcRV76+OeQDRWEgyOJXrLeN32zb/bMYGMtMCs9K5Xz1R/\nYDEYKh9cRM4QrVaYfyPOmJ6kI44WN4ltJtDUw3w4HxSj3OTHUflXUFLNi6dS/M7H\nWBhMfAErmJD80Bc7GoL5KdHyFNy8AI/pgdEXssMKcJo1i8/zXU6hXe/QFimKtvHS\nTXbL+S3AYhRjfXQvJV81sWA5cEliSh8vCpS8ZiNYBLTywSyUVH/be0U3JoFnBQ7h\nBie8GwrpkscOyipUhrXZG9GIvGGEGBQduBTNsKwbUwKBgQDl1Qo/CaGHuA7P7Q9S\nzCvoNw4Id++6ynUD+hJHR8tz2368eKeAL6kYkXcXS3exlMVT7xpzsvmcmM2XZURm\n1AM+RLs0rzXingE19EnAcZQwL1alkSG+nxBPv5FqtJ60jgNVCB1piZgIOXTQZdhn\n2fT+fyg1ht+YNMrYodOkDmJZXwKBgQDjkgArmluYbcii0Jh69eOJxzfAttOuYgoS\nUJa4KuqFI3c9UmFIpoFhkdQPsD1JCSKoHdKv5UMiFXv0HZnveaHpKaUaU9OnlvFC\nQAtcqpbV6sCnxRYiuGyMdjp78XkQh9ugCDNKl1Nvf6junJCrAmVnDwsE9VEq4Awy\n49Cl8hr2ZwKBgFVbrhaDaS6SuU2X6Z0Cnzv7VobmpG5nStZTRf6bN4CsAIHW/b6p\n9M9fFy/bo3ScoDzwDI7z5ai3R4P25FScYSf7Ntv2RrkHncOAGvQSOss6iZ+sKzA0\nu0YjC8rpkhfUtoAaJ3JO29wSGsRbTugjFs5+Q1y93sUUtlGGqKfBf91ZAoGBAMP0\nRBFHqPdoEQuhcqrucC+DS4613zCZWvLKUf3jdm2OTG6RMRPNzDqnx2J670qkgyMg\nCvtK/rOqrEFX++UpZzHOmkxBQk9cugHCBAaXHaq1qY7NNnJPO6j3ZQS0uPpzAbqb\nVQ81nrKzylMsnaWjOo2zdlmeo3W31sk7Qb6i6nShAoGBAOHNE9rkWDRCYyDsjzgY\n6bt60IAIxo7uAGAEJZ6nbJSctlhXzdiYAI+D1TSdesplfb6PGS3/Q+hrMIBAPWoR\nAol+S5S395SPPhYa/RMHUFYz0J2w4Ic6M79JVrBEDGwvk7D3GDQE6Pvq4oBdG/8E\nQRHbGrMMb1MIIqPrsYIryVdB\n-----END PRIVATE KEY-----\n";
const spreadsheetId = '1Mw7eXhp7t9DUCXWGzLZDjkmQ-pg6eyHtNSPXx2fdR4w';

async function accessGoogleSheet() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey
},
scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const client = await auth.getClient();
const sheets = google.sheets({ version: 'v4', auth});

//Reading data from the sheet
async function readSheetData() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Hoja 1!A2:E10'
  });
  const values = response.data.values;
  console.log(values);
}

app.post('/save', (req, res) => {
const username = req.body.username;
const email = req.body.email;
const phone = req.body.phone;
const fromdate = req.body.fromdate;
const todate = req.body.todate;

writeSheetData(req.body);
res.render('success');
});

//Writing data to the sheet
async function writeSheetData(values1) {
console.log('values', values1);
const values = [
  [
    values1.username,
    values1.email,
    values1.phone,
    values1.fromdate,
    values1.todate
  ]
];
const resource = {
  values
};
console.log('resource', resource)

const response = await sheets.spreadsheets.values.update({
  spreadsheetId,
  range: 'Hoja 1!A2:E10',
  valueInputOption: 'USER_ENTERED',
  resource
});

console.log(`${response.data.updatedCells} cells updated.`);
// Call de function to read data from tbe sheet
readSheetData();

// Call the function to write data to the sheet
}
}
app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
accessGoogleSheet();
*/