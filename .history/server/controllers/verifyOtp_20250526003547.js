const User=require('../models/User');


const verifyOtp= async(req,res,next)=>{

    const {otp}=req.body; 

     try {

        const findedUser= await User.findOne({'otp.otp':otp})
        if(!findedUser){
            const error = new Error('Invalid OTP');
            error.statusCode = 400;
            throw error; // If no user found with the given OTP, throw an error     
        }
        
     } catch (error) {
        next(error);
     }
     
}