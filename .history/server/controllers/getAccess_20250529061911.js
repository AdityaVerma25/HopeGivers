const User = require('../models/User');

const getAccess = async (req, res, next) => {

    const { token } = req.body;
    
    try {

        const findedUser = await User.findOne({ token });
        if (!findedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
    }catch (error) {
        next(error);
    }
}
