const express = require('express');
const registerController = require('../controllers/register');
const router = express.Router();
const loginController = require('../controllers/login');
const forgetPasswordController = require('../controllers/forgetPassword');
const verifyOtpController = require('../controllers/verifyOtp');
const getOtpTimeController = require('../controllers/getOtpTime');


router.post('/register', registerController);
router.post('/login', loginController);
router.post('/forget/password', forgetPasswordController);
router.post('/otp/verify', verifyOtpController);



module.exports = router;