const express = require('express');
const registerController = require('../controllers/register');
const router = express.Router();
const loginController = require('../controllers/login');
const forgetPasswordController = require('../controllers/forgetPassword');
const verifyOtpController = require('../controllers/verifyOtp');
const getOtpTimeController = require('../controllers/getOtpTime');
const updatePasswordController = require('../controllers/passwordUpdate');
const getAccessController = require('../controllers/getAccess');
// Home page controll

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/forget/password', forgetPasswordController);
router.post('/otp/verify', verifyOtpController);
router.post('/otp/time', getOtpTimeController);
router.post('/password/update', updatePasswordController);
router.post('/get/access', getAccessController);

module.exports = router;