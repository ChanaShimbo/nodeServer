var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	'firstName' : String,
	'lastName' : String,
	'email' : String,
	'phone' : String
});

module.exports = mongoose.model('user', userSchema);
