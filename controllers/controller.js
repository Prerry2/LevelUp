const express = require("express");

const router = express.Router();

const user = require('../models/model')

//doesn't work, something wrong with question marks
// user.addUser(['hayley', 'mypass'], function (err) {
//     if (err) {
//         console.log(err)
//     }
//     console.log('this worked')
// })


//WORKING FUNCTIONS BELOW


// user.createUserTasks(USER-ID-HERE, function(err) {
//     if (err) {
//         console.log(err)
//     }
//     console.log('create user tasks works')
// })

// user.addUserStats(USER-ID-HERE, function(err) {
//     if(err) {
//         console.log(err)
//     }
//     console.log('add user stats work')
// })

// user.createUserStats(USER-ID-HERE, function(err) {
//     if (err) {
//         console.log(err)
//     }
//     console.log('add table function works')
// })


module.exports = router