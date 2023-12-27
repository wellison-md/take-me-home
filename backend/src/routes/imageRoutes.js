const { Router } = require('express');
const imageController = require('../controllers/imageController');
const router = Router();

router.get('/images', imageController.getAll);
router.get('/images/:id', imageController.getByAdId);

module.exports = router;
