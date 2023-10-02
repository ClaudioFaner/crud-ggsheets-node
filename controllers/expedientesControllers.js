let googleSheet = require('../spreadsheet');

exports.obtenerVideos = async (req, res) => {
    registros = await googleSheet.accederGoogleSheet();
    res.render('index', { registros })
}

exports.pintarForm = (req, res) => {
  res.render('form', {})
}

exports.guardarVideo = (req, res) => {
  //const aGuardar = ['tit1', 'est1', 'form1']
  googleSheet.guardarVideo(req.body);
  console.log(req.body);
  res.redirect('/data');
}



/*
exports.listExpedientes = async (req, res) => {
  try {
    // Conectar a Google Sheets
    await doc.useServiceAccountAuth(require(credentials));
    await doc.loadInfo(); // Cargar información del documento
    const sheet = doc.sheetsByIndex[0]; // La hoja que contiene los expedientes

    // Leer los datos de Google Sheets
    const rows = await sheet.getRows(); // Obtener todas las filas

    // Procesar los datos y enviarlos a la vista
    const expedientes = rows.map(row => ({
      id: row.id,
      nombre: row.nombre,
      // Otros campos de expediente
    }));

    res.render('expedientes/listExpedientes', { expedientes });
  } catch (error) {
    console.error('Error al listar expedientes:', error);
    res.status(500).send('Error al listar expedientes');
  }
};

exports.createExpediente = async (req, res) => {
  // Obtener datos del formulario
  const nombre = req.body.nombre;
  // Otros campos del formulario

  try {
    // Conectar a Google Sheets
    await doc.useServiceAccountAuth(require('./credentials.json'));
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    // Crear una nueva fila en Google Sheets
    await sheet.addRow({
      nombre: nombre,
      // Otros campos de expediente
    });

    res.redirect('/expedientes'); // Redirigir a la lista de expedientes
  } catch (error) {
    console.error('Error al crear expediente:', error);
    res.status(500).send('Error al crear expediente');
  }
};

exports.getExpediente = async (req, res) => {
  const id = req.params.id; // Obtener el ID del expediente desde la URL

  try {
    // Conectar a Google Sheets y obtener datos por ID
    await doc.useServiceAccountAuth(require('./credentials.json'));
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows({ query: `id = ${id}` });
    if (rows.length === 0) {
      res.status(404).send('Expediente no encontrado');
    } else {
      const expediente = rows[0];
      res.render('expedientes/show', { expediente });
    }
  } catch (error) {
    console.error('Error al obtener expediente:', error);
    res.status(500).send('Error al obtener expediente');
  }
};

exports.updateExpediente = async (req, res) => {
  const id = req.params.id;
  // Obtener datos del formulario para la actualización

  try {
    // Conectar a Google Sheets
    await doc.useServiceAccountAuth(require('./credentials.json'));
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows({ query: `id = ${id}` });
    if (rows.length === 0) {
      res.status(404).send('Expediente no encontrado');
    } else {
      const expediente = rows[0];

      // Actualizar los campos del expediente
      expediente.nombre = req.body.nombre;
      // Otros campos de actualización

      await expediente.save(); // Guardar los cambios

      res.redirect('/expedientes');
    }
  } catch (error) {
    console.error('Error al actualizar expediente:', error);
    res.status(500).send('Error al actualizar expediente');
  }
};

exports.deleteExpediente = async (req, res) => {
  const id = req.params.id;

  try {
    // Conectar a Google Sheets y eliminar por ID
    await doc.useServiceAccountAuth(require('./credentials.json'));
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows({ query: `id = ${id}` });
    if (rows.length === 0) {
      res.status(404).send('Expediente no encontrado');
    } else {
      const expediente = rows[0];
      await expediente.delete(); // Eliminar la fila
      res.redirect('/expedientes');
    }
  } catch (error) {
    console.error('Error al eliminar expediente:', error);
    res.status(500).send('Error al eliminar expediente');
  }
};
*/