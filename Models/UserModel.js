const mongoose = require('mongoose')

const UserModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true,
    },
    avatar: {
        public_id: "",
        url: ""
    },
    country: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('User', UserModel)