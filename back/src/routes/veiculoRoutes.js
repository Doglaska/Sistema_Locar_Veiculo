const { Router } = require('express');
const veiculoController = require('../controllers/VeiculoController');

const router = Router();

router.post('/', veiculoController.create);

module.exports = router;