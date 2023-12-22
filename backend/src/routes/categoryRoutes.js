const { Router } = require('express');
const router = Router();
const categoryController = require('../controllers/categoryController');

router.get('/categories', categoryController.getAll);

module.exports = router;