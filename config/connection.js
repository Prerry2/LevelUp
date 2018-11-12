var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "LevelUp"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);

})

// connection.connect(function(err) {
//   if (err) {
//     return console.error('error: ' + err.message);
//   }
//   user.addUser(['hayley', 'mypassword'], function(response) {
//       console.log('reponse: ' + response)
//   })
//   console.log('Connected to the MySQL server.');
// });

module.exports = connection;