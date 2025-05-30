const User = require('../models/User');

const getUserDetails = async (req, res, next) => {
    const { token } = req.body;

    try {
        const findedUser = await User.findOne({ 'otp.token': token });

        if (!findedUser) {
            const error = new Error('Something went wrong, please try again');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            message: 'User details fetched successfully',
            status: true,
            findedUser
        });

    } catch (error) {
        next(error);
    }
}

module.exports = getUserDetails;