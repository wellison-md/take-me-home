const { Router } = require('express');
const donationController = require('../controllers/donationController');
const router = Router();

router.get('/donations', donationController.getAll);
router.get('/donations/:id', donationController.getById);
router.get('/donations/user/:id', donationController.getByUserId);

module.exports = router;
