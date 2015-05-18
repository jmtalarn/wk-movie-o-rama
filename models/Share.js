var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var ShareSchema = new mongoose.Schema({
  from: { type: ObjectId, ref: 'Profile'},
  to:{ type: ObjectId, ref: 'Profile'},
  movie:{ type: ObjectId, ref: 'Movie'},
  message: String,

});

module.exports = mongoose.model('Share', ShareSchema);
