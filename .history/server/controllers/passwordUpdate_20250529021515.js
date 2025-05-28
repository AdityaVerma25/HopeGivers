const User= require('../models/User');


const updatePassword = async (req, res, next) => {
    const { token, Password,confirmPassword } = req.body;

    try {
        const findedUser = await User.findOne({ 'otp.token': token });
        if (!findedUser) {
            return res.status(404).json({ message: 'User not found', status: false });
        }

        if (new Date(findedUser.otp.sendTime).getTime() < new Date().getTime()) {
            return res.status(400).json({ message: 'OTP expired', status: false });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        findedUser.password = hashedPassword; // Update the user's password
        findedUser.otp.token = null; // Clear the OTP token after password update
        findedUser.otp.otp = null; // Clear the OTP after password update

        await findedUser.save(); // Save the updated user document

        res.status(200).json({
            message: 'Password updated successfully',
            status: true
        });

    } catch (error) {
        next(error);
    }
};