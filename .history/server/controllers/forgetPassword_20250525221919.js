const User = require('../models/User');
const bcrypt = require('bcrypt');



const forgetPassword = async (req, res, next) => {  
    