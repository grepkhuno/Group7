const ContactController = require("../controllers/contactTb.controllers");

module.exports = (app) => {
  app.get("/api/getAllContactList", ContactController.getAllContactList),
    app.get("/api/getContactByID/:id", ContactController.getContactByID),
    app.post("/api/addContact", ContactController.addContact);
};
