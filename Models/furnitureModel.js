var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var furnitureSchema = new Schema({
	'name' : String,
	'category' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'categoryModel'
	},
	'price' : Number,
	'qty' : Number,
	'description' : String,
	'material' : String,
	'object' : String,
	'color' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'colorModel'
	},
	'hight' : Number,
	'length' : Number
});

module.exports = mongoose.model('furniture', furnitureSchema);
