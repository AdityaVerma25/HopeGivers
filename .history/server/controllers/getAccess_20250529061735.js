const User = require('../models/User');

const getAccess = async (req, res, next) => {

    const { token } = req.body;
    
    try {
        const userId = req.user.id; // Assuming user ID is stored in req.user
        const user = await User.findById(userId).select('access'); // Fetch only the access field

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ access: user.access });
    } catch (error) {
        console.error('Error fetching access:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
