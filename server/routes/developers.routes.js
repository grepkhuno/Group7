const DevelopersController = require('../controllers/developersTb.controller')

module.exports = (app)=>{
    app.get('/api/getAllDevelopersList', DevelopersController.getAllDevelopersList),
    app.post('/api/addDeveloper', DevelopersController.addDeveloper),
    app.get('/api/getDeveloperByID/:id', DevelopersController.getDeveloperByID),
    app.delete('/api/deleteDeveloper/:id', DevelopersController.deleteDeveloper),
    app.put('/api/updateDeveloper/:id', DevelopersController.updateDeveloper)

}