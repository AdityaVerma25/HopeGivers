const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
    name: String,
    bloodGroup: String,
    country: String,
    state: String,
    district: String,
    city: String,
    readyToDonate: String
});

module.exports = mongoose.model("Donor", donorSchema)