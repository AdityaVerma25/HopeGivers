const User = require('../models/User');
const bcrypt = require('bcrypt');



const login = async (req, res, next) => {


    const { email, password } = req.body;
    try {

        const formatedEmail = email.toLowerCase();

        // Validate the request body
        const findedUser = await User.findOne({  email: formatedEmail });
        if (!findedUser) {
            const error = new Error('Invalid email or password');
            error.statusCode = 401; // Unauthorized
            throw error; // Throw the error to be caught by the catch block
        }


        const isPasswordValid = await bcrypt.compare(password, findedUser.password);

    } catch (error) {
         next(error);
    }
}