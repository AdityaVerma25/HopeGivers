const User=require('../models/User');


const verifyOtp= async(req,res,next)=>{

    const {otp}=req.body; 

     try {

        const findUser= await User.findOne({'otp.otp':otp})
        
        
     } catch (error) {
        next(error);
     }
     
}