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

        if (findedUser.otp.otp && new Date(findedUser.otp.sendTime).getTime() > new Date().getTime()) {
            const error = new Error(`OTP already sent. Please wait before requesting ${new Date(findedUser.otp.sendTime).toLocaleDateString()} again.`);
            error.statusCode = 400;
            throw error; // If OTP was sent within the last 5 minutes, throw an error
        }
        // Generate a new OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP



    } catch (error) {
        console.log('Error in forgetPassword controller:', error.message);
        next(error); // Pass the error to the next middleware
    }
}