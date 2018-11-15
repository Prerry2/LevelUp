var express = require('express');
var router = express.Router();

const connection = require('../config/connection.js')

router.get('/', function(req, res, next) {
  res.render('index', {title: 'LevelUP'})
})

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Registration' });
});

router.post('/register', function(req, res, next) {
  const username = req.body.username
  const password = req.body.password
  const avatar = req.body.avatarRadios

  console.log(username)
  console.log(password)
  console.log(avatar)
  
  res.render('dashboard', { title: 'Registration Complete - Welcome To LevelUP' })
 
  // connection.query('INSERT INTO users VALUES (?, ?, ?)' [username, password, avatar], function(error, res, fields) {
  //   if (error) throw error;
    
  //   res.render('register', { title: 'Registration Complete' })
  // })
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/login', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard'})

  const username = req.body.username
  const password = req.body.password

  console.log(username)
  console.log(password)

})

module.exports = router;