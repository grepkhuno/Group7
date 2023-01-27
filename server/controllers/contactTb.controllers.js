const ContactsModel = require('../models/contactTb.model')

module.exports = {
    getAllContactList: (req, res) => {
        ContactsModel.find().sort([['name', 1]]) 
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    //
    addContact: (req, res) => {
        ContactsModel.create(req.body)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json(err)
            })
    },
   //
}