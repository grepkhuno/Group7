const DeveloperModel = require('../models/developersTb.model')

module.exports = {
    getAllDevelopersList: (req, res) => {
        DeveloperModel.find().sort([['devName', 1]]) 
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    //
    addDeveloper: (req, res) => {
        DeveloperModel.create(req.body)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json(err)
            })
    },
    //
    getDeveloperByID: (req, res) => {
        DeveloperModel.findById(req.params.id)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    //
    deleteDeveloper: (req, res) => {
        DeveloperModel.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json({ err });

            })
    },
    //
    updateDeveloper: (req, res) => {
        DeveloperModel.updateOne({ _id: req.params.id }, req.body, {runValidators:true})
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err)
            })
    }

}