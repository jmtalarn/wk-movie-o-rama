var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var MovieSchema = new mongoose.Schema({
  //_id: ObjectId,
  cover: Buffer,
  title: String,
  description: String,
  likes: [ { type: ObjectId, ref: 'Like'}],
  shares: [{ type: ObjectId, ref: 'Share'}],

});

module.exports = mongoose.model('Movie', MovieSchema);
