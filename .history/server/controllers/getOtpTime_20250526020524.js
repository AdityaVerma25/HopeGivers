const User = require('../models/User');


const getOtpTime = async (req, res, next) => {


    // Controller to get the OTP time for the user
    const { token } = req.body;

    try {
        const findedUser = await User.findOne({ 'otp.otpToken': token }).select('otp');
        if (!findedUser) {
            const error = new Error('Something went wrong');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({ message: 'success', status: true, sendTime });




    } catch (error) {
        next(error);
    }
}