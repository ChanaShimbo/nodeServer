var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var colorSchema = new Schema({
	'name' : String
});

module.exports = mongoose.model('color', colorSchema);
