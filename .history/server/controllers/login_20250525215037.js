const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const login = async (req, res, next) => {


    const { email, password } = req.body;
    try {

        const formatedEmail = email.toLowerCase();

        // Validate the request body
        const findedUser = await User.findOne({  email: formatedEmail });
        if (!findedUser) {
            const error = new Error('Invalid email');
            error.statusCode = 401; // Unauthorized
            throw error; // Throw the error to be caught by the catch block
        }


        const isPasswordValid = await bcrypt.compare(password, findedUser.password);
        if (!isPasswordValid) {
            const error = new Error('Incorrect password');
            error.statusCode = 401; // Unauthorized
            throw error; // Throw the error to be caught by the catch block
        }

        // If the user is found and the password is valid, send a success response
 
        const accessToken = jwt.sign(
            { email:formatedEmail, userId: findedUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' } // Token expiration time
        );

        res.status(200).json({
            message: 'Login successful',
            status:true,
            token: accessToken
        });

    } catch (error) {
         next(error);
    }
}







module.exports = login;