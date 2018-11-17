var express = require('express');
var router = express.Router();
// var db = require('../models')

const connection = require('../config/connection.js')
const User = connection.User;
const Task = connection.Task;
const Routine = connection.Routine;

router.get('/', function(req, res, next) {
  res.render('index', {title: 'LevelUP'})
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Registration' });
});

router.post('/register', function(req, res, next) {
  
  User.create(req.body, {
    fields: ['username', 'password', 'avatar']
  })
  
  res.render('dashboard', { title: 'Registration Complete - Welcome To LevelUP' })
 
});



router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/login', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' })

  const username = req.body.username
  const password = req.body.password

})



router.get('/addtask', function(req, res, next) {
  res.render('addtask', { title: 'Add A New Task' })
})

router.post('/addtask', function(req, res, next) {
  
  Task.create(req.body, {
        fields: ['title', 'notes', 'category', 'difficult', 'important', 'deadline', 'deadlineDate']
    })
  
  res.render('dashboard', { title: 'Dashboard' })
})



router.get('/addroutine', function(req, res, next) {
  res.render('addroutine', { title: 'Add A New Routine' })
})

router.post('/addroutine', function(req, res, next) {
  
  Routine.create(req.body, {
    fields: ['title', 'notes', 'category', 'difficult', 'important', 'streak']
})
  res.render('dashboard', { title: 'Dashboard' })
})



router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' })
})

router.get('/api/users', function(req, res, next) {
  User.findAll({}).then(function(dbUsers) {
    res.json(dbUsers)
  })
})

router.get('/api/routines', function(req, res, next) {
  Routine.findAll({}).then(function(dbRoutine) {
    res.json(dbRoutine)
  })
})

router.get('/api/tasks', function(req, res, next) {
  Task.findAll({}).then(function(dbRoutine) {
    res.json(dbUsers)
  })
})

module.exports = router;