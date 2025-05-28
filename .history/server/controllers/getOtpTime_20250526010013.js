const User = require('../models/User');


const getOtpTime = async (req, res,next) => {


    // Controller to get the OTP time for the user
    const { token } = req.body;

    try {
        const findeduser = await User.findOne({'otp.otpToken': token});
        if (!findeduser) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const otpTime = user.otpTime;
        if (!otpTime) {
            return res.status(400).json({ message: 'OTP time not set' });
        }

        res.status(200).json({ otpTime });
    } catch (error) {
        console.error('Error fetching OTP time:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}