const User = require('../models/User');
const bcrypt = require('bcrypt');




const register = async (req, res,next) => {  
    
    const { username, email, password } = req.body;

    try{
       const formatedName = username.toLowerCase();
       const formatedEmail = email.toLowerCase();
       
       const findedUser = await User.findOne({ email: formatedEmail });
       if (findedUser) {
       }


    }catch(error){
        console.log('Error in register controller:', error.message);    
        next(error); 
        // Pass the error to the next middleware
    }


}