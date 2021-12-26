var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ordersSchema = new Schema({
	'userId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'userModel'
	},
	'date' : Date,
	'price' : Number,
	'orderItemId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'orderItemModel'
	}
});

module.exports = mongoose.model('orders', ordersSchema);
