//import express
var express = require('express');

//express.Router class creates modular, mountable route handlers. Router is a complete middleware and routing system often referred as a 'mini-app'
var router = express.Router();

//import burger.js that uses ORM to modify the burger data
var burger = require('../models/burger.js');

//router for the app
//defines the home page route
// router.get('/', function (req, res) {
//     res.redirect('/burgers');
// });
//defines the other page route
oo

router.get('/', function (req, res) {
    burger.all(function (data) {
        
        //send the rendered view to the client
        var dataObject = {burgers: data};
        
        for (var i = 0; i < dataObject.burgers.length; i++){
            
            array.push(dataObject.burgers[i].burger_name);
            console.log(dataObject.burgers[i].burger_name);
    
        }
        res.render('index', array);
       
    });

});

router.post('/api/burgers', function (req, res) {
    burger.create([
        'burger_name', 'devoured'
    ], [
            req.body.burger_name, req.body.devoured
        ], function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});

// router.put('/api/burgers/:id', function (req, res) {
//     var condition = 'id = ' + req.params.id;

//     console.log('condition', condition);
//     burger.update({
//         devoured: req.body.devoured
//     }, condition, function (result) {
//         if (result.changedRows === 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// router.delete('/api/burgers/:id', function (req, res) {
//     var condition = 'id = ' + req.params.id;

//     burger.delete(condition, function (result) {
//         if (result.affectedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });


//export router 
module.exports = router;