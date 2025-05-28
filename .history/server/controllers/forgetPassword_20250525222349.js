const User = require('../models/User');
const bcrypt = require('bcrypt');



const forgetPassword = async (req, res, next) => {


    const { email } = req.body;

    try {

        const formatedEmail = email.toLowerCase();

        // Find the user by email
        const findedUser = await User.findOne({ email: formatedEmail });
        if (!findedUser) { 
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;    
        }

        if (findedUser.otp && findedUser.otp.sendTime && findedUser.otp.sendTime > Date.now() - 5 * 60 * 1000) {

        // Generate a new OTP



    } catch (error) {
        console.log('Error in forgetPassword controller:', error.message);
        next(error); // Pass the error to the next middleware
    }
}