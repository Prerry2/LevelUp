const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
// const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mysql = require('mysql')

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

const debug = require('debug')
const http = require('http')

const app = express()

// require('dotenv').config();

const port = process.env.PORT || 3000
app.set('port', port)



app.listen(port, function() {
    console.log("App listening on PORT " + port)
})