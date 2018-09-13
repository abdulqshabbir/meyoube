const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    created: {type: Date, default: Date.now}
})

module.exports = mongoose.model('User', userSchema)

