const mongoose = require('mongoose')

const contactShechema = mongoose.Schema({
    name: {
        type: String,
        required:[true, "Please enter a Name"]
    },
    email: {
        type: String,
        required:[true, "Please enter a valid email"]
    },
    comment: {
        type: String
    },
    devID: {
        type: String
    }

}, { timestamps: true })

const Contacts = mongoose.model('Contacts', contactShechema)
module.exports = Contacts