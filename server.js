const express = require('express')
const app = express()
const path = require('path')
const exphbs = require('express-handlebars')

//if we choose to use handlebars
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
// app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, '/public')));

const PORT = process.env.PORT || 8000;

const routes = require("./controllers/controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});