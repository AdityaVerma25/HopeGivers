const User = require('../../models/Donor');
const bcrypt = require('bcrypt');
const joi = require('joi');




const Donor = async (req, res, next) => {

    // Validate the request body
    const { error: validationError } = validateUser(req.body);


    const { fullname,bloodGroup,MobileNumber,country,state,district,city,userID,email,password,isAvailable } = req.body;

    try {

        if (validationError) {
            const error = new Error(validationError.details[0].message);
            error.statusCode = 400; // Bad Request
            throw error; // Throw the error to be caught by the catch block
        }

        const formatedName = name.toLowerCase();
        const formatedEmail = email.toLowerCase();

        const findedUser = await User.findOne({ email: formatedEmail });
        if (findedUser) {
            const error = new Error('This email already exists');
            error.statusCode = 400; // Bad Request
            throw error; // Throw the error to be caught by the catch block
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name: formatedName,
            email: formatedEmail,
            password: hashedPassword
        });
        const savedUser = await newUser.save();
        res
            .status(201)
            .json({ message: 'User registered successfully', status: true,name: savedUser.name });


    } catch (error) {
        console.log('Error in register controller:', error.message);
        next(error);
        // Pass the error to the next middleware
    }


}



module.exports = Donor;


function validateUser(data) {
    const userSchema = joi.object({
        name: joi.string().min(3).max(30).required(),
        email: joi.string().email().required(),
        password: joi.string().min(7).max(30).required()
    });

    return userSchema.validate(data);
}