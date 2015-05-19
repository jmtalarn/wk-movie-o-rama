var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Movie = require('../models/Movie.js');
var Profile = require('../models/Profile.js');
var Like = require('../models/Like.js');
var Auth = require('../routes/auth.js');

router.post('/movie/:id', Auth.ensureAuthorized, function(req, res, next) {
      Movie.findById(req.params.id, function(err, movie) {
        if (err) return next(err);
        //new Like
        var like = new Like({
          profile: req.profile.id,
          movie: movie.id,
        });
        like.save(function(err, s) {
          if (err) return next(err);

          req.profile.likes.push(like);
          req.profile.save(function(err, p) {
            if (err) return next(err);
          });
          movie.likes.push(like);
          movie.save(function(err, p) {
            if (err) return next(err);
          });
          res.json(movie.likes);
        });
      });
});



module.exports = router;
