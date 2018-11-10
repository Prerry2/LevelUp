const express = require('express')
const app = express()


const PORT = process.env.PORT || 8000;

// const path = require('path')
// const exphbs = require('express-handlebars')

//if we choose to use handlebars
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
// app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))


// const routes = require("./controllers/controller.js");

// app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});



// Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

