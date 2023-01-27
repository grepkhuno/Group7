const ContactController = require('../controllers/contactTb.controllers')

module.exports = (app)=>{
    app.get('/api/getAllContactList', ContactController.getAllContactList),
    app.post('/api/addContact', ContactController.addContact)
}