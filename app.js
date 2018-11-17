var Sequelize = require('sequelize')

var connection = new Sequelize('levelup_db', 'root', 'IJ-25-jo', {
    dialect: 'mysql'
})

var User = connection.define('user', {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        // validate: {
        //     len: {
        //         args: [8, 20],
        //         msg: "Please enter a password between 8-20 characters"
        //     }
        // }
    },
    avatar: {
        type: Sequelize.STRING,
    },
    experience: {
        type: Sequelize.INTEGER,
        defaultValue: 5
    },
    intelligence: {
        type: Sequelize.INTEGER,
        defaultValue: 5
    },
    strength: {
        type: Sequelize.INTEGER,
        defaultValue: 5
    },
    charisma: {
        type: Sequelize.INTEGER,
        defaultValue: 5
    },
    vitality: {
        type: Sequelize.INTEGER,
        defaultValue: 5
    },
    
})

var Task = connection.define('card', {
    type: {
        type: Sequelize.STRING,
        defaultValue: 'task'
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    notes: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    difficult: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    important: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    deadline: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    deadlineDate: {
        // type: Sequelize.DATE
        type: Sequelize.STRING,
        validate: {
        }
    },
    complete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    streak: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    streakCount: {
        type: Sequelize.INTEGER,
        defaultValue: null
    },
    username: {
        type: Sequelize.STRING,
        // validate: {
        //     notNull: true,
        //     notEmpty: true
        // }
    }
})

var Routine = connection.define('card', {
    type: {
        type: Sequelize.STRING,
        defaultValue: 'routine'
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    notes: {
        type: Sequelize.TEXT,
        validate: {
            notEmpty: true
        }
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    difficult: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    important: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    deadline: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    deadlineDate: {
        // type: Sequelize.DATE
        type: Sequelize.STRING,
        defaultValue: null
    },
    complete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    streak: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    streakCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    username: {
        type: Sequelize.STRING,
        // validate: {
        //     notNull: true,
        //     notEmpty: true
        // }
    }
})

connection.sync().then(function () {

    // var req = {
    //     body: {
    //         username: 'karlos',
    //         password: 'password',
    //         avatar: '1'
    //     }
    // }

    // User.create(req.body, {
    //     fields: ['username', 'password', 'avatar']
    // })

    // User.create({
    //     username: 'tallkarol',
    //     password: 'password',
    //     avatar: '1'
    // })

    // Task.create({
    //     title: 'sample title',
    //     notes: 'sample notes',
    //     category: 'professional',
    //     difficult: false,
    //     important: true,
    //     deadline: false,
    //     username: 'tallkarol'
    // })

    // Routine.create({
    //     title: 'sample title',
    //     notes: 'sample notes',
    //     category: 'professional',
    //     difficult: true,
    //     important: false,
    //     username: 'tallkarol'
    // })

    // User.findById(1).then(function(user) {
    //     console.log(user.dataValues)
    // })

    // User.findAll().then(function(users) {
    //     console.log(users.length)
    // })
}).catch(function (error) {

})