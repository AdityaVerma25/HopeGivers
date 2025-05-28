const express = require('express');
const registerController = require('../controllers/register');
const router = express.Router();
const loginController = require('../controllers/login');
const forgetPasswordController = require('../controllers/forgetPassword');
co


router.post('/register', registerController);
router.post('/login', loginController);
router.post('/forget/password', forgetPasswordController);


module.exports = router;