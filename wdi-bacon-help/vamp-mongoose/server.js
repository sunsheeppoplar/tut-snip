// npm modules
var express = require('express');
var mongoose = require('mongoose');

// local modules
var Vampire = require('./models/vampire.js'); // Mongoose model

// instantiate express
var app = express();

// point our server at our static assets file
app.use(express.static('public'));

// node port
app.listen(3000, function() {
	console.log('Server running on 3k');
});

// connect our Mongoose ODM to our MongoDB
mongoose.connect('mongodb://localhost/vampMongoose', function(err) {
  // will instantiate a db with any name if there isn't one available with that name already
  if (err) {
    console.log('database connection error', err);
  } else {
    console.log('database connection successful');
  }
});

// routes

app.get('/', function(req, res) {
	// defaults to our index page within public folder anyhow
	res.render('index.html')
});

app.get('/vampires', function(req, res) {
	Vampire.find().exec(function(err, vampires) {
		if (err) {
			console.log(err)
		} else {
			res.send(vampires)
		}
	})
})