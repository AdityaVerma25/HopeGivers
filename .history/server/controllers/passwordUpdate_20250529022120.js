const User = require('../models/User');


const updatePassword = async (req, res, next) => {
    const { token, password, confirmPassword } = req.body;

    try {
        const findedUser = await User.findOne({ 'otp.token': token });
        if (!findedUser) {
            const error = new Error('Something went wrong, please try again');
            error.statusCode = 404;
            throw error; // If no user found with the given token, throw an error
        }

        if (new Date(findedUser.otp.sendTime).getTime() + 5 * 60 * 1000 < new Date().getTime()) {
            const error = new Error('Something went wrong, please try again');
            error.statusCode = 404;
            throw error;    }

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