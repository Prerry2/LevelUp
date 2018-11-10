const user = require('../models/model')

user.addUser(['hayley', 'mypassword'], function(response) {
    console.log(response)
})

