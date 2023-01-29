const UserController = require('../controllers/user.controllers')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
  app.post('/api/register', UserController.registerUser)
  app.post('/api/login', UserController.loginUser)
  app.get('/api/allusers', UserController.getallusers)
  app.get('/api/logout', UserController.logoutuser)
  app.post('/api/login/:id', UserController.loginUser)
}