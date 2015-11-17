// need to be able to access mongoose as our odm
var mongoose = require('mongoose');

// define and instantiate our schema (which is, like a lot of things we deal with, an object, available to us now after requiring mongoose above
var vampSchema = new mongoose.Schema({
	// key value pair time (don't forget those commas)
	name: String,
	hair_color: String,
	eye_color: String,
	dob: Date,
	loves: Array,
	location: String,
	gender: String,
	victims: Number
});

// conversion of our schema into a model
var Vampire = mongoose.model('Vampire', vampSchema);

// make this sucker (get it? unintentional pun) available elsewhere, like the server...
module.exports = Vampire; 