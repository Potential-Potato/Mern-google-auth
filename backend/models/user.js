// models/user.js

const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    id: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
