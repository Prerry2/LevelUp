// require("dotenv").config();
var express = require('express')
var exphbs = require('express-handlebars')

var db = require('./models')

var app = express()
var PORT = process.env.PORT || 4200

// middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static("public"))

// handlebars
app.engine("handlebars", exphbs({
    // defaultLayout: "main"
}))
app.set("view engine", "handlebars")

// routes
require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app)

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