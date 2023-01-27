const mongoose = require('mongoose')

const DevelopersShechema = mongoose.Schema({
    userName: {
        type: String,
        required:[true, "UserName is required"]
    },
    password: {
        type: String,
        required:[true, "erro password"]
    },
    devName: {
        type: String
    },
    devLastName: {
        type: String
    },
    devPicture: {
        type: String
    },
    devSummary: {
        type: String
    },
    devTools:{
        type : Array , 
        "default" : []
    }


}, { timestamps: true })

const Developers = mongoose.model('Developers', DevelopersShechema)
module.exports = Developers