const User=require('../models/User');


const verifyOtp= async(req,res,next)=>{

    const {otp}=req.body; 

     try {

        const findedUser= await User.findOne({'otp.otp':otp})
        if(!findedUser){
            const error =
        }
        
     } catch (error) {
        next(error);
     }
     
}