var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Profile = require('../models/Profile.js');

/* GET /movies listing. */
router.get('/', function(req, res, next) {
  Profile.find(function(err, profiles) {
      if (err) return next(err);
      result = [];
      profiles.forEach(function(p) {
          result.push({
              id: p._id,
              username: p.username,
              likes: p.likes,
              shares: p.shares,}
            );

          });
          res.json(result);
      });
});
router.get('/:id', function(req, res, next) {
  Profile.findById(req.params.id, function(err, profile) {
    if (err) return next(err);
    result = {
      id: profile._id,
      username: profile.username,
      likes: profile.likes,
      shares: profile.shares,
    };

    res.json(result);
  });
});

module.exports = router;
