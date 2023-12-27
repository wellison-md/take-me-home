const { Router } = require('express');
const donationController = require('../controllers/donationController');
const donationValidation = require('../middlewares/donationValidation');
const router = Router();

router.get('/donations', donationController.getAll);
router.get('/donations/:id', donationController.getById);
router.get('/donations/user/:id', donationController.getByUserId);
router.get('/donation-ranking', donationController.getRanking);
router.post('/donations', donationValidation, donationController.makeDonation);

module.exports = router;
