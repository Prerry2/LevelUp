$('#submitTask').on('submit', function(event) {
    event.preventDefault()
    //take inputs and send them to an array 
    // let inputs = []

    console.log($('#inputTitle').val())

    // inputs.push($('#inputTitle'))
    // inputs.push($('#inputNotes'))
    // //get users id 

    // //add array to user's task table
    // user.addTask(userID, inputs, function(err) {
    //     if (err) {
    //         console.log(err)
    //     }
    // })
    //display new task on page

})


//creating new user submit function
$('#submitUser').submit(function(event) {
    event.preventDefault()
    //push username and password to newUser array
    let newUser = []
    
    //add new user to user table
    user.addUser(values, function(err) {
        if (err) {
            console.log(err)
        }
    })

    //get that user's id from sql

    currentUser = 'put a user id here'

    user.createUserStats(userID, function(err) {
        if (err) {
            console.log(err)
        }
    })

    user.createUserTasks(userID, function(err) {
        if (err) {
            console.log(err)
        }
    })
})