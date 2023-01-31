const UserController = require('../controllers/user.controllers')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
  app.post('/api/register', UserController.registerUser)
  app.post('/api/login', UserController.loginUser)
  app.get('/api/allusers', UserController.getallusers)
  app.get('/api/oneuser/:id', UserController.getOneUser)
  app.get('/api/logout', UserController.logoutuser)
  app.delete('/api/deleteuser/:id', UserController.deleteuser),
  app.put('/api/updateuser/:id', UserController.updateuser)
}