var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Movie = require('../models/Movie.js');
var Profile = require('../models/Profile.js');
var Like = require('../models/Like.js');
var Auth = require('../routes/auth.js');

var image_contentType = 'image/jpeg';

/* GET /movies listing. */
router.get('/', function(req, res, next) {
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
router.get('/:id/cover', function(req, res, next) {
 Movie.findById(req.params.id, function (err, m) {
          if (err) return next(err);
          res.contentType(image_contentType);
          res.send(m.cover);
        });
});

router.post('/:id/like', Auth.ensureAuthorized, function (req, res, next) {
	Movie.findById(req.params.id, function (err, movie) {
		if (err) return next(err);
		//new Like
		var like = new Like({
			profile: req.profile.id,
			movie: movie.id,
		});
		like.save(function (err, s) {
			if (err) return next(err);

			req.profile.likes.push(like);
			req.profile.save(function (err, p) {
				if (err) return next(err);
			});
			movie.likes.push(like);
			movie.save(function (err, p) {
				if (err) return next(err);
			});
			//res.json(movie.likes);
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
});




module.exports = router;
