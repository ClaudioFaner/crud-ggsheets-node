const express = require('express');
const router = express.Router();
const expedientesController = require('../controllers/expedientesControllers');

router.get('/data',expedientesController.obtenerVideos);
router.get('/form',expedientesController.pintarForm);
router.post('/form',expedientesController.guardarVideo);

/*
// Rutas para CRUD de expedientes

router.get('/listExpedientes',expedientesController.listExpedientes)
  // Listar expedientes (mostrar todos)

router.get('/createExpediente', (req, res) => {
  // Formulario para crear un nuevo expediente
});

router.post('/new', (req, res) => {
  // Procesar la creación de un nuevo expediente
});

router.get('/:id', (req, res) => {
  // Mostrar detalles de un expediente
});

router.get('/:id/edit', (req, res) => {
  // Formulario para editar un expediente
});

router.post('/:id/edit', (req, res) => {
  // Procesar la edición de un expediente
});

router.post('/:id/delete', (req, res) => {
  // Eliminar un expediente
});
*/
module.exports = router;
