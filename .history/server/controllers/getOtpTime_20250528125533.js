const User = require('../models/User');


const getOtpTime = async (req, res, next) => {
  const { token } = req.body;

  try {
    const findedUser = await User.findOne({ 'otp.token': token }).select('otp');
    if (!findedUser) {
      return res.status(404).json({ message: 'User not found', status: false });
    }

    const sendTime = findedUser.otp?.sendTime;

    if (!sendTime) {
      return res.status(400).json({ message: 'sendTime not found', status: false });
    }
    const EXPIRY_DURATION_MS = 5 * 60 * 1000;
    const expiryTime = new Date(sendTime).getTime() + EXPIRY_DURATION_MS;

    res.status(200).json({ 
      message: 'success', 
      status: true, 
      sendTime: new Date(sendTime).toISOString(),
      expiryTime // NEW FIELD 
    });

  } catch (error) {
    next(error);
  }
};


module.exports = getOtpTime;