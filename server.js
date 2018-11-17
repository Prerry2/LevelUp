require("dotenv").config();
var express = require('express')
var exphbs = require('express-handlebars')
var path = require('path')

var db = require('./models')

var app = express()
var PORT = process.env.PORT || 4200

// middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// handlebars
app.engine("handlebars", exphbs({
    // defaultLayout: "main"
}))
app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "handlebars")

// routes
require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app)

// temp routes from previous build
var index = require('./routes/index')
var users = require('./routes/users')
app.use('/', index)
app.use('/users', users)

// catch 404 from previous build
app.use(function(req,res,next) {
    var err = new Error('Not Found')
    err.status = 404;
    next(err)
})

const syncOptions = { force: false }

// clear testdb by setting force to true
// if (process.env.NODE_ENV === "test") {
//     syncOptions.force = true
// }

// start server, sync models
db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port " + PORT)
    })
})

module.exports = app