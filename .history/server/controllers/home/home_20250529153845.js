const User = require('../models/User');

const getUserDetails = async (req, res, next) => {
    const { token } = req.body;

    try {
        const user = await User.findOne({;

        if (!user) {
            return res.status(404).json({ message: 'User not found', status: false });
        }

        res.status(200).json({
            message: 'User details fetched successfully',
            status: true,
            user
        });

    } catch (error) {
        next(error);
    }
}