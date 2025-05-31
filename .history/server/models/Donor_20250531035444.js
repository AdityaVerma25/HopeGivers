const mongoose = require('mongoose');


const donorSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true
    },
    bloodgroup: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: false
    },
    authorize: {  
        type: Boolean,
        default: false
    },
}, { timestamps: true });

module.exports = mongoose.model('Donor', donorSchema);