var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var LikeSchema = new mongoose.Schema({
  profile: { type: ObjectId, ref: 'Profile'},
  movie: { type: ObjectId, ref: 'Movie'},
});

module.exports = mongoose.model('Like', LikeSchema);
