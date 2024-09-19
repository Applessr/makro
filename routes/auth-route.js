const express = require('express');
const authController = require('../controllers/auth-controller');

const router = express.Router()

router.post('/register',authController.register);
router.post('/login',authController.login);
router.post('/forget-password',authController.forgetPassword);
router.post('/reset-password',authController.resetPassword);

module.exports = router;