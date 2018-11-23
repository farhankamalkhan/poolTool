var express = require('express')
var poolTooldb = require('./poolToolSchema')
var routes = express.Router()

routes.route('/all').get(function(req, res, next) {
    poolTooldb.find(function(err, pooltool) {
        if(err) {
            return next(new Error(err))
        }
        res.json(pooltool)
    })
})

routes.route('/add').post(function(req, res) {
    var team = 0
    if(req.body.team) {
        team = req.body.team
    }
    poolTooldb.create({
        name: req.body.name,
        team: team
    },
    function(error, pooltool) {
        if(error) {
            res.status(400).send('Unable to add user.')
        }
        res.status(200).send(pooltool)
    })
})

routes.route('/delete/:id').delete(function(req, res, next) {
    var id = req.params.id
    poolTooldb.findByIdAndRemove(id, function(err, pooltool) {
        if (err) {
            return next(new Error('User was not found.'))
        }
        res.status(200).send('Successfully removed')
    })
})

module.exports = routes