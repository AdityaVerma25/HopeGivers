const User = require('../models/User');





const register = async (req, res,next) => {  
    
    try{

    }catch(error){
        console.log('Error in register controller:', error.message);    
        next(error); // Pass the error to the next middleware
        
    }


}