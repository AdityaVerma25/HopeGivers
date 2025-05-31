const Donor = require('../../models/Donor');
const bcrypt = require('bcrypt');
const joi = require('joi');




const DonorUser = async (req, res, next) => {

    // Validate the request body
    const { error: validationError } = validateUser(req.body);


   const { fullname, bloodGroup, mobileNumber, country, state, district, city, userID, email, password, isAvailable, authorize } = req.body;

    try {

        if (validationError) {
            const error = new Error(validationError.details[0].message);
            error.statusCode = 400; // Bad Request
            throw error; // Throw the error to be caught by the catch block
        }

        const formatedName = fullname.toLowerCase();
        const formatedEmail = email.toLowerCase();

        const findedUser = await Donor.findOne({ email: formatedEmail });
        if (findedUser) {
            const error = new Error('This email already exists');
            error.statusCode = 400; // Bad Request
            throw error; // Throw the error to be caught by the catch block
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newDonor = new Donor({
            fullname: formatedName,
            email: formatedEmail,
            password: hashedPassword,
            bloodgroup: bloodGroup,
            mobileNumber: mobileNumber, // lowercase m here
            country,
            state,
            district,
            city,
            userID,
            isAvailable,
            authorize,
        });

        const savedUser = await newDonor.save();
        res
            .status(201)
            .json({ message: 'User registered successfully', status: true, name: savedUser.name });


    } catch (error) {
        console.log('Error in register controller:', error.message);
        next(error);
        // Pass the error to the next middleware
    }


}



module.exports = DonorUser;


function validateUser(data) {
    const userSchema = joi.object({
        fullname: joi.string().min(3).max(30).required(),
        email: joi.string().email().required(),
        password: joi.string().min(7).max(30).required(),
        mobileNumber: joi
            .string()
            .pattern(/^[0-9]{10}$/)
            .required()
            .messages({
                'string.pattern.base': 'Mobile number must be a 10-digit number',
                'string.empty': 'Mobile number is required',
            }),
        // Optionally add other fields if you want:
        bloodGroup: joi.string().required(),
        country: joi.string().required(),
        state: joi.string().required(),
        district: joi.string().required(),
        city: joi.string().required(),
        userID: joi.string().required(),
        isAvailable: joi.boolean(),
        authorize: joi.boolean(),
    });

    return userSchema.validate(data);
}
