const User = require('../models/User');
const bcrypt = require('bcrypt');



const forgetPassword = async (req, res, next) => {


    const { email } = req.body;

    try {

        const formatedEmail = email.toLowerCase();

        // Find the user by email
        const findeduser = await User.findOne({ email: formatedEmail });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }



    } catch (error) {
        console.log('Error in forgetPassword controller:', error.message);
        next(error); // Pass the error to the next middleware
    }
}