const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
    name: String,
    img: String,
    duration: String,
});

module.exports = mongoose.model('Exercise', exerciseSchema);

