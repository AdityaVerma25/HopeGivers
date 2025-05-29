const User = require('../models/User');

const getAccess = async (req, res, next) => {

    const { token } = req.body;

    try {

        const findedUser = await User.findOne({ token });
        if (!findedUser) {
            const error = new Error('User not found');
            error.status = 404;
            throw error;
        }

        res.status(200)
    } catch (error) {
        next(error);
    }
}
