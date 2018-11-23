const express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose')
var morgan = require('morgan')
var config = require("./app/config")
var app = express();
var port = config.APP_PORT;

mongoose.connect(config.DB, { useNewUrlParser: true })

app.use(bodyParser.json({
    type: 'application/json'
}))

app.use(express.static(path.join(__dirname, '/public')))

app.use(morgan('dev'))

console.log("Server listening on port: " + port)
app.listen(port)

var routes = require('./app/routes')

app.use('/api', routes)

app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/public/index.html')
})