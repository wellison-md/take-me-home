const { Router } = require('express');
const adController = require('../controllers/adController');
const adValidation = require('../middlewares/adValidation');
const router = Router();

router.get('/ads', adController.getAll);
router.get('/ads/:id', adController.getById);
router.get('/ads/petname/:petname', adController.getByPetname);
router.post('/ads', adValidation, adController.create);

module.exports = router;
