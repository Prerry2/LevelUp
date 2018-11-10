const orm = require('../config/orm')

const user = {
    addUser : (values, cb) => {
        orm.addUser('users', ['name, password'], values, function(response) {
            cb(response)
        })
    },
    createUserTasks : (userID, cb) => {
        orm.createUserTasks(userID, 'id INT AUTO_INCREMENT, title VARCHAR(100) NOT NULL, notes VARCHAR(200), difficulty BOOLEAN NOT NULL, importance BOOLEAN NOT NULL, type VARCHAR(50) NOT NULL, category VARCHAR(30), PRIMARY KEY (id)', function(response) {
            cb(response)
        })
    },
    createUserStats : (userID, cb) => {
        orm.createUserStats(userID, 'id INT AUTO_INCREMENT, stat_name VARCHAR(30) NOT NULL, stat_score INT NOT NULL,  PRIMARY KEY (id)', function(response) {
            cb(response)
        })
    },
    addUserStats : (userID, cb) => {
        orm.addUserStats(userID, 'stat_name, stat_score', [('exp', 1), ('health', 5), ('intelligence', 5), ('charisma', 5), ('vitality', 5), ('strength', 5)], function(response) {
            cb(response)
        })
    }
}

module.exports = user