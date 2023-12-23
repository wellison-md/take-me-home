const { Router } = require("express");
const userController = require("../controllers/userController");
const userValidations = require("../middlewares/userValidations");

const router = Router();

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.post('/users', userValidations, userController.create);
router.delete('/users/:id', userController.deleteById);

module.exports = router;
