var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    username: "root",
    password: "IJ-25-jo",
    database: "levelup_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
})

module.exports.connection;