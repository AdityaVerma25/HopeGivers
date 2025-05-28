const User = require('../models/User');
const bcrypt = require('bcrypt');



const forgetPassword = async (req, res, next) => {


    
    try {
    } catch (error) {
        console.log('Error in forgetPassword controller:', error.message);
        next(error); // Pass the error to the next middleware
    }
}