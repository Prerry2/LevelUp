const connection = require('./connection')

const questions = num => Array(num).fill('?').toString();


const sqlVals = object => {
    let arrPairs = Object.entries(object)
    return arrPairs.map(x => `${x[0]} = '${x[1]}'`).join(', ');
}

//orm create user functions
//addUser -- adds user to overall user table
//user table columns id, name, password
//createUser -- creates user task table and user stat table
//createUserTasks -- named user id from user table + tasks ex. 1tasks

//put stat rows in user categories with starter scores


const orm = {
    addUser: (table, columns, values, cb) => {
        let queryString = 'INSERT INTO ' + table
        queryString += ' ('
        queryString += columns.toString()
        queryString += ') '
        queryString += 'VALUES ("'
        queryString += values.join('","')
        queryString += '"); '

        //questions(values.length)
        console.log(queryString)

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    createUserTasks: (userID, columns, cb) => {
        let queryString = 'CREATE TABLE ' + userID + '_tasks'
        queryString += ' ('
        queryString += columns
        queryString += ')'

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    createUserStats: (userID, columns, cb) => {
        let queryString = 'CREATE TABLE ' + userID + '_stats'
        queryString += ' ('
        queryString += columns.toString()
        queryString += ')'

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    addUserStats: (userID, columns, values, cb) => {
        let queryString = 'INSERT INTO ' + userID + '_stats'
        queryString += ' ('
        queryString += columns
        queryString += ') '
        queryString += 'VALUES '
        queryString += values

        console.log(queryString)

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    updateDifficultStat: (userID, stat, cb) => {
        let queryString = 'UPDATE ' + userID + '_stats'
        queryString += ' SET '
        queryString += 'stat_score = stat_score +3'
        queryString += ' WHERE stat_name = "' + stat.toString() + '"'

        console.log(queryString)

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    updateEasyStat: (userID, stat, cb) => {
        let queryString = 'UPDATE ' + userID + '_stats'
        queryString += ' SET '
        queryString += 'stat_score = stat_score +1'
        queryString += ' WHERE stat_name = "' + stat.toString() + '"'

        console.log(queryString)

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    addTask: (userID, columns, values, cb) => {
        let queryString = 'INSERT INTO ' + userID + '_tasks'
        queryString += ' ('
        queryString += columns
        queryString += ') '
        queryString += 'VALUES ('
        queryString += values.toString() + ')'

        console.log(queryString)

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}


module.exports = orm