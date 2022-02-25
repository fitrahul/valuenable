const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name: { type: String, required: false },
    age: { type: String, required: false },
    gender: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
});

// collection is user
module.exports = mongoose.model('user', userschema); 