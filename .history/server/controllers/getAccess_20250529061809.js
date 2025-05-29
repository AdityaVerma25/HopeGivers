const User = require('../models/User');

const getAccess = async (req, res, next) => {

    const { token } = req.body;
    
    try {
    }catch (error) {
        creturn res.status(500).json({ error: 'Internal server error' });
    }
}
