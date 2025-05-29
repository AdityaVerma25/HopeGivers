const User = require('../models/User');

const getAccess = async (req, res, next) => {

    const { token } = req.body;
    
    try {

        const findedUser = await User.findOne({ token });
    }catch (error) {
        next(error);
    }
}
