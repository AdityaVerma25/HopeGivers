const express = require('express');
const registerController = require('../controllers/register');
const router = express.Router();
const loginController = require('../controllers/login');
const forgetPasswordController = require('../controllers/forgetPassword');
const verifyOtpController = require('../controllers/verifyOtp');
const getOtpTimeController = require('../controllers/getOtpTime');
const updatePasswordController = require('../controllers/passwordUpdate');
const getAccessController = require('../controllers/getAccess');
// Home page controller
const getHomeController = require('../controllers/home/home.js');

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/forget/password', forgetPasswordController);
router.post('/otp/verify', verifyOtpController);
router.post('/otp/time', getOtpTimeController);
router.post('/password/update', updatePasswordController);
router.post('/get/access', getAccessController);
route

module.exports = router;