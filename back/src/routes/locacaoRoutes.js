const { Router } = require('express');
const locacaoController = require('../controllers/LocacaoController');

const router = Router();

router.post('/', locacaoController.create);

module.exports = router;