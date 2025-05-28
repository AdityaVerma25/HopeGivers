const User = require('../models/User');
const bcrypt = require('bcrypt');




const register = async (req, res, next) => {

    const { username, email, password } = req.body;

    try {
        const formatedName = username.toLowerCase();
        const formatedEmail = email.toLowerCase();

        const findedUser = await User.findOne({ email: formatedEmail });
        if (findedUser) {
            const error = new Error('This email already exists');
            error.statusCode = 400; // Bad Request
            throw error; // Throw the error to be caught by the catch block
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username: formatedName,
            email: formatedEmail,
            password: hashedPassword
        });
        const savedUser = await newUser.save();
        res.status(201).json({
            message: 'User registered successfully',


    } catch (error) {
        console.log('Error in register controller:', error.message);
        next(error);
        // Pass the error to the next middleware
    }


}