var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var ProfileSchema = new mongoose.Schema({
  //_id: ObjectId,
  username: String,
  image: Buffer,
  likes: [ { type: ObjectId, ref: 'Like'}],
  shares: [{ type: ObjectId, ref: 'Share'}],
});

module.exports = mongoose.model('Profile', ProfileSchema);
