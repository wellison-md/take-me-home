const { Router } = require('express');
const donationController = require('../controllers/donationController');
const router = Router();

router.get('/donations', donationController.getAll);

module.exports = router;
