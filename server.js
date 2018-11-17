var express = require('express')
var exphbs = require('express-handlebars')
var path = require('path')
var http = require('http')
var passport = require('passport')
var fs = require('fs')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var router = express.Router()

var db = require('./models')

// from youtube authentication video
var routes = require('./routes')
// var user = require('./routes/user')
// var home = require('./routes/home')
// var application = require('./routes/application')
// var passportConfig = require('./config/passport')

var app = express()
// require("dotenv").config();
var PORT = process.env.PORT || 4200

app.use(express.static(path.join(__dirname, 'public')))

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.session({ secret: 'formakebettersecurity' }))
app.use(passport.initialize())
app.use(passport.session())
app.use(router)


// handlebars
app.engine("handlebars", exphbs({
    // defaultLayout: "main"
}))
app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "handlebars")

// temp routes from previous build
app.use('/', routes.index)

const syncOptions = { force: false }

// clear testdb by setting force to true
// if (process.env.NODE_ENV === "test") {
//     syncOptions.force = true
// }

// start server, sync models
// db.sequelize.sync(syncOptions).then(function() {
//     app.listen(PORT, function() {
//         console.log("Listening on port " + PORT)
//     })
// })
console.log('it works')

module.exports = app