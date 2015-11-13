var express = require('express'),
	request = require('request');
var app = express();
var ejs = require('ejs');
app.set('view_engine', 'ejs')

app.use(express.static('public'));

app.listen(3000, function() {
	console.log('Oink, here we are out on 3k!');
});

app.get('/', function(req, res) {
	var greeting = {example: ["Anyone", "Somebody"]}
	res.render('index.ejs', {greeting: greeting});
});

app.get('/kittens', function(req, res) {
	res.send("hey, this works");
});

app.get('/pokemon', function(req, res) {
	res.send("hey, this works");
});

app.get('/puppies', function(req, res) {
	res.send("hey, this works");
});

app.get('/searchGif/:searchParam', function(req, res) {
	res.send("hey, this works");
});

app.get('/seachGifById/:id', function(req, res) {
	res.send("hey, this works");
});