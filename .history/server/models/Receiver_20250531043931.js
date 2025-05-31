const mongoose = require("mongoose");

const receiverSchema = new mongoose.Schema({
    name: String,
    bloodGroup: String,
    country: String,
    state: String,
    district: String,
    city: String,
});

module.exports = mongoose.model("Recr", receiverSchema)