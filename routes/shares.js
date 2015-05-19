var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Movie = require('../models/Movie.js');
var Profile = require('../models/Profile.js');
var Share = require('../models/Share.js');
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

        Profile.findById(req.body.user, function(err, toProfile) {
          if (err) return next(err);

          //new Share
          var share = new Share({
            from: profile.id,
            to: toProfile.id,
            message: req.body.message,
            movie: movie.id,
            date: new Date()
          });
          share.save(function(err, s) {
            if (err) return next(err);
            
              profile.shares.push(share);
              profile.save(function(err, p) {
                if (err) return next(err);
              });
              toProfile.shares.push(share);
              toProfile.save(function(err, p) {
                if (err) return next(err);
              });
              movie.shares.push(share);
              movie.save(function(err, p) {
                if (err) return next(err);
              });
              res.json(movie.shares);
          });
        });


   

  
      });

    }
  });

});



module.exports = router;
