const User = require('../models/User');





const register = async (req, res,next) => {  
    
    try{

    }catch(error){
        console.error('Error in register controller:', error);
        res.status(500).json({ message: 'Internal server error' });
    }


}