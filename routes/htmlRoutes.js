var express = require ('express')
var router = express.Router()

const connection = require('../config/connection.js')

router.get('/', function(req, res, next) {
    res.render('index', { title: "LevelUP" })
})

module.exports = router

// from project starter

// var db = require("../models");

// module.exports = function(app) {
//   // Load index page
//   app.get("/", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.render("index", {
//         msg: "Welcome!",
//         examples: dbExamples
//       });
//     });
//   });

//   // Load example page and pass in an example by id
//   app.get("/example/:id", function(req, res) {
//     db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.render("example", {
//         example: dbExample
//       });
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };


// from first build

// var express = require('express');
// var router = express.Router();

// const connection = require('../config/connection.js')

// router.get('/', function(req, res, next) {
//   res.render('index', {title: 'LevelUP'})
// })

// router.get('/register', function(req, res, next) {
//   res.render('register', { title: 'Registration' });
// });

// router.post('/register', function(req, res, next) {
//   const username = req.body.username
//   const password = req.body.password
//   const avatar = req.body.avatarRadios

//   console.log(username)
//   console.log(password)
//   console.log(avatar)
  
//   res.render('dashboard', { title: 'Registration Complete - Welcome To LevelUP' })
 
//   // connection.query('INSERT INTO users VALUES (?, ?, ?)' [username, password, avatar], function(error, res, fields) {
//   //   if (error) throw error;
    
//   //   res.render('register', { title: 'Registration Complete' })
//   // })
// });

// router.get('/login', function(req, res, next) {
//   res.render('login', { title: 'Login' });
// });

// router.post('/login', function(req, res, next) {
//   res.render('dashboard', { title: 'Dashboard' })

//   const username = req.body.username
//   const password = req.body.password

//   console.log(username)
//   console.log(password)

// })

// router.get('/addtask', function(req, res, next) {
//   res.render('addtask', { title: 'Add A New Task' })
// })

// router.post('/addtask', function(req, res, next) {
  
//   const type = req.body.type
//   const title = req.body.title
//   const notes = req.body.notes
//   const category = req.body.category
//   const difficulty = req.body.difficulty
//   const importance = req.body.importance
//   const deadline = req.body.deadline
  
  
//   console.log("\ntype: " + type)
//   console.log("title: " + title)
//   console.log("notes: " + notes)
//   console.log("category: " + category)
//   console.log("isDifficult: " + difficulty)
//   console.log("isImportant: " + importance)
//   console.log("hasDeadline: " + deadline + "\n")
//   if (deadline) { const deadlineDate = req.body.deadlineDate; console.log(deadlineDate) }
  
//   res.render('dashboard', { title: 'Dashboard' })
// })

// router.get('/addroutine', function(req, res, next) {
//   res.render('addroutine', { title: 'Add A New Routine' })
// })

// router.post('/addroutine', function(req, res, next) {
  
//   const type = req.body.type
//   const title = req.body.title
//   const notes = req.body.notes
//   const category = req.body.category
//   const difficulty = req.body.difficulty
//   const importance = req.body.importance
//   const streak = req.body.streak
  
//   console.log("type: " + type)
//   console.log("title: " + title)
//   console.log("notes: " + notes)
//   console.log("category: " + category)
//   console.log("isDifficult: " + difficulty)
//   console.log("isImportant: " + importance)
//   console.log("hasStreak: " + streak + "\n")
  
//   res.render('/dashboard', { title: 'Dashboard' })
// })

// router.get('/dashboard', function(req, res, next) {
//   res.render('dashboard', { title: 'Dashboard' })
// })

// module.exports = router;