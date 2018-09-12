// Importing module express
var express = require('express');

// Importing todo module so it can be accessed from app.js
var todoController = require('./controllers/todo-controller');

// Setting up express app
var app = express();

// Set up template engine
app.set('view engine', 'ejs');

// Setting up a static file
app.use(express.static('./public'));

// Fire todoController thus app is transfered to todo-controller.js and can be used there
todoController(app);

//Listen to port
app.listen(3000);
console.log("Listening to port 3000");