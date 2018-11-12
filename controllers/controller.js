const express = require("express");

const router = express.Router();

const user = require('../models/model')

user.addUser(['hayley', 'mypass'], function (err) {
    if (err) {
        console.log(err)
    }
    console.log('this worked')
})

//['hayley', 'myPassword'], 

module.exports = router