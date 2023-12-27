const { Router } = require('express');
const adController = require('../controllers/adController');
const router = Router();

router.get('/ads', adController.getAll);
router.get('/ads/:id', adController.getById);

module.exports = router;
