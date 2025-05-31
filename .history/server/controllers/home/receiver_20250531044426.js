const Receiver = require("../../models/Receiver");


const ReceiverUser = async (req, res, next) => {
    try {
        // Clone request data and remove retypePassword
        const dataToValidate = { ...req.body };
        delete dataToValidate.retypePassword;
    
        // Validate the request body
        const { error: validationError } = validateReceiver(dataToValidate);
    
        if (validationError) {
        const error = new Error(validationError.details[0].message);
        error.statusCode = 400;
        throw error;
        }
    
        const { name, bloodGroup, country, state, district, city } = dataToValidate;
    
        // Create and save new receiver
        const newReceiver = new Receiver({
        name,
        bloodGroup,
        country,
        state,
        district,
        city,
        });
    
        await newReceiver.save();
    
        res.status(201).json({ message: "Receiver registered successfully" });
    } catch (error) {
        next(error);
    }
    }