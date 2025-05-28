const express = require('express');
const registerController = require('../controllers/register');
const router = express.Router();
const loginController = require('../controllers/login');



router.post('/register', registerController);
router.post('/login', loginController);


module.exports = router;