const User=require('../models/User');


const getOtpTime = async (req, res) => {    


    // Controller to get the OTP time for the user
    

    try {
        const user = await User.findById(req.user.id);
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