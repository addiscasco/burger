var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var methodOverride = require('method-override');
var exphbs = require("express-handlebars");
var app = express();

var PORT = process.env.PORT || 8080;

var public = require('path').join(__dirname, '/public');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(public));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(methodOverride("_method"));

// Import routes and give the server access to them. It poiints to our controller file.
var routes = require("./controllers/burgers_controller.js");
app.use('/', routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

