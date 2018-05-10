//import express
var express = require('express');

//express.Router class creates modular, mountable route handlers. Router is a complete middleware and routing system often referred as a 'mini-app'
var router = express.Router();

//import burger.js that uses ORM to modify the burger data
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
    burger.all(function (data) {
        
        //send the rendered view to the client
        var hbsObject = {burgers: data};
        
        for (var i = 0; i < hbsObject.burgers.length; i++){
            hbsObject.burgers[i].devoured = parseInt(hbsObject.burgers[i].devoured);
        }
        res.render('index', hbsObject);
    });
});

router.post('/', function (req, res) {
    burger.insert(req.body.newBurger);
    res.redirect('/');
});
 router.put('/:id', function(req, res){
     burger.update(req.params.id);
     res.redirect('/');
 });

//export router 
module.exports = router;