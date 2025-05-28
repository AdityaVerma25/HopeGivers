const User=require('../models/User');


const verifyOtp= async(req,res,next)=>{

    const {otp}=req.body; 

     try {

        
        
     } catch (error) {
        next(error);
     }
     
}