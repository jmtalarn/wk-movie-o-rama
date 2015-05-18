var mongoose = require('mongoose');
var Profile = require('Profile.js');
var Movie = require('Movie.js');
var ObjectId = mongoose.Schema.Types.ObjectId;

var LikeSchema = new mongoose.Schema({
  profile: { type: ObjectId, ref: 'Profile'},
  movie: { type: ObjectId, ref: 'Movie'},
});

module.exports = mongoose.model('Like', LikeSchema);
