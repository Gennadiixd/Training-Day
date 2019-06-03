const mongoose = require("mongoose");

const heatupSchema = new mongoose.Schema({
    name: String,
    img: String,
    duration: String,
});

module.exports = mongoose.model('Heatup', heatupSchema);