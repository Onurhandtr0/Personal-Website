const express = require("express");
const router = express.Router();

const userController = require('../controllers/user');

router.get('/', userController.getIndex);
router.get('/about', userController.getAbout);
router.get('/contact', userController.getContact);
router.get('/login', userController.getLogin);

module.exports = router;