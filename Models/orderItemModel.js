var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var orderItemSchema = new Schema({
	'furnitureId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'furnitureModel'
	}
});

module.exports = mongoose.model('orderItem', orderItemSchema);
