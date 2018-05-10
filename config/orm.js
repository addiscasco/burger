//import (require) connection.js into orm.js
var connection = require('./connection.js');

//created methods that execute the MySQL commands in the controlllers - methods needed to retrieve and store data in database
var orm = {
    //cb is to run function we have in burger.js
    all: function (tableInput, cb) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
            console.log("LKJDSLKJDS");
            console.log(result);
        });
    },
    insert: function (tableInput, col1, col2, val1, val2) {
        var queryString = 'INSERT INTO ?? (??,??) VALUES (?,?)';
        connection.query(queryString, [tableInput, col1, col2, val1, val2], function (err) {
            if (err) throw err;
        });
    },
    update: function (tableInput, col1, val1, col2, val2) {
        var queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(queryString, [tableInput, col1, val1, col2, val2], function (err) {
            if (err) throw err;
        });
    }
};

module.exports = orm;