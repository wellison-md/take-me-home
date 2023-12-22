const { Router } = require('express');
const cityController = require('../controllers/cityController');
const router = Router();

router.get('/cities', cityController.getAll);
router.get('/cities/:id', cityController.getById);

module.exports = router;
