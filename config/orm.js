//import (require) connection.js into orm.js
var connection = require('./connection.js');

//created methods that execute the MySQL commands in the controlllers - methods needed to retrieve and store data in database

var orm = {
    //cb is to run function we have in burger.js
    all: function (tableInput, cb) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
            console.log("LKJDSLKJDS");
            console.log(tableInput);
          
        });
    }
};

//exports the orm object for the model burger.js
module.exports = orm;