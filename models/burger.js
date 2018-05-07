//interface with the database / modify SQL code in orm.js using

//import orm.js to burger.js
var orm = require('./../config/orm.js');

//calls the ORM functions using burger specific input for the ORM
var burger = {
    //grabs all burgers from db / 
    all: function (cb) {
        orm.all('burgers', function (data) {
            cb(data);
        });
    }
};

//export burger.js
module.exports = burger;