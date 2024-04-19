const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    id: mongoose.Schema.ObjectId,
    email: {
        type: String,
        unique: true
    },
})

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel