var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Share = require('../models/Share.js');
var Movie = require('../models/Movie.js');

/* GET /movies listing. */
router.get('/movie/:id', function(req, res, next) {
  Movie.find(function(err, movies) {
    if (err) return next(err);
    var result = [];
    movies.forEach(function(m) {
      result.push({
        id: m._id,
        title: m.title,
        description: m.description,
        shares: m.shares,
        likes: m.likes,
      });

    });
    res.json(result);
  });
});

router.get('/:id', function(req, res, next) {
  Movie.findById(req.params.id, function(err, movie) {
    if (err) return next(err);
    var result = {
      id: movie._id,
      title: movie.title,
      description: movie.description,
      shares: movie.shares,
      likes: movie.likes,
    };

    res.json(result);
  });
});



module.exports = router;
