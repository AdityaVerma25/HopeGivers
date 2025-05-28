const User=require('../models/User');


const verifyOtp= async(req,res,next)=>{

    const {otp}=req.body; 

     try {

        const findUser= await User.findOne({''})
        
     } catch (error) {
        next(error);
     }
     
}