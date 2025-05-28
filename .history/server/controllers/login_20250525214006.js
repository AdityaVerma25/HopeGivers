const User = require('../models/User');
const bcrypt = require('bcrypt');



const login = async (req, res, next) => {


    const { email, password } = req.body;
    try {

        const formatedEmail = email.toLowerCase();
        const findedser = await User.findOne({  email: formatedEmail });

    } catch (error) {

    }
}