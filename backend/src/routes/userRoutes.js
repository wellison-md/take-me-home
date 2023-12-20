const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);

module.exports = router;
