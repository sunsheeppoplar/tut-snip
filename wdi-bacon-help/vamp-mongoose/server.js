// npm modules
var express = require('express');
var mongoose = require('mongoose');

// local modules
var Vampire = require('./model.js');

// instantiate express
var app = express();

// point our server at our static assets file
app.use(express.static('public'));

// node port
app.listen(3000, function() {
	console.log('Server on 3k');
});