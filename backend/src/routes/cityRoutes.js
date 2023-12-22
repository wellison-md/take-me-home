const { Router } = require('express');
const cityController = require('../controllers/cityController');
const router = Router();

router.get('/cities', cityController.getAll);

module.exports = router;
