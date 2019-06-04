const mongoose = require("mongoose");

const assesmentSchema = new mongoose.Schema({
    name: String,
    img: String,
    duration: String,
});

module.exports = mongoose.model('Assesment', assesmentSchema);

