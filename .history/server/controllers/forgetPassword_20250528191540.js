const User = require('../models/User');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const sendMail = require('../utils/sendMail'); // Assuming you have a utility function to send emails



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

        // Check if OTP was recently sent
        const currentTime = Date.now();
        const otpSendTime = findedUser.otp?.sendTime || 0;

        if (findedUser.otp.otp && otpSendTime > currentTime) {
            const waitTimeInMs = otpSendTime - currentTime;
            const seconds = Math.floor((waitTimeInMs / 1000) % 60);
            const minutes = Math.floor(waitTimeInMs / (1000 * 60));
            const error = new Error(`OTP already sent. Please wait ${minutes}m ${seconds}s before requesting again.`);
            error.statusCode = 400;
            throw error;
        }

        // Generate new OTP and token
        const otp = Math.floor(Math.random() * 90000) + 100000;
        const token = crypto.randomBytes(32).toString('hex');

        findedUser.otp.otp = otp;
        findedUser.otp.sendTime = Date.now() + 1 * 60 * 1000; // Valid for 5 minutes
        findedUser.otp.token = token;

        console.log(`Generated OTP: ${otp}`);
        console.log(`Send Time: ${new Date(findedUser.otp.sendTime).toLocaleString()}`);

        await findedUser.save();

        sendMail(otp, formatedEmail); // send OTP via email

        res.status(200).json({
            message: 'OTP sent successfully',
            status: true,
            token: token
        });

    } catch (error) {
        console.log('Error in forgetPassword controller:', error.message);
        next(error);
    }
};




module.exports = forgetPassword;