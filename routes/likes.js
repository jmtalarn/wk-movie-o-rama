var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Movie = require('../models/Movie.js');
var Profile = require('../models/Profile.js');
var Like = require('../models/Like.js');
var Auth = require('../routes/auth.js');

router.get('/movie/:id', Auth.ensureAuthorized, function(req, res, next) {
  var query = Profile.where({
    token: req.token
  });

  query.findOne(function(err, profile) {
    if (err) throw err;
    if (profile) {
      Movie.findById(req.params.id, function(err, movie) {
        if (err) return next(err);
        //new Like
        var like = new Like({
          profile: profile.id,
          movie: movie.id,
        });
        like.save(function(err, s) {
          if (err) return next(err);

          profile.likes.push(like);
          profile.save(function(err, p) {
            if (err) return next(err);
          });
          movie.likes.push(like);
          movie.save(function(err, p) {
            if (err) return next(err);
          });
          res.json(movie.likes);
        });
      });
    }
  });

});



module.exports = router;
