const User = require('../models/User');

const getAccess = async (req, res, next) => {

    const { token } = req.body;
    
    try {
    }catch (error) {
        console.error('Error in getAccess:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
