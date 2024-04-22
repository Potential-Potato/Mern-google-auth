// models/user.js
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    id: {
        type: String,
    },
    email: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create and export the User model
const userauthmodel = mongoose.model('User', userSchema);
module.exports = userauthmodel
