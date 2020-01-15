const express = require('express');
const router = express.Router();
const controller = require('../controllers/fornecedorController');

router.get('/list', controller.list);
router.get('/:id', controller.get);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;