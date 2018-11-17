var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "IJ-25-jo",
    database: "levelup_db"
});

// different way to start connection using env configed parameters

// var connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database : process.env.DB_NAME,
//   })

connection.connect(function(err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
})

// not sure if we need a test connection but here it is for later, checkForDelete

// var testconnection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "IJ-25-jo",
//     database: "levelup_test"
// })

// testconnection.connect(function(err) {
//     if (err) {
//         console.error("error connection: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId)
// })

module.exports = connection;