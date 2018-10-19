var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Movie = require('../models/Movie.js');
var Profile = require('../models/Profile.js');
var Like = require('../models/Like.js');
var Share = require('../models/Share.js');
var Auth = require('../routes/auth.js');

var image_contentType = 'image/jpeg';

/* GET /movies listing. */
router.get('/', Auth.ensureAuthorized, function (req, res, next) {
	Movie.find(function (err, movies) {
		if (err) return next(err);
		var result = [];
		movies.forEach(function (m) {
			result.push({
				_id: m._id,
				title: m.title,
				description: m.description,
				shares: m.shares,
				likes: m.likes,
			});

		});
		res.json(result);
	});
});

router.get('/:id', Auth.ensureAuthorized, function (req, res, next) {
	Movie.findById(req.params.id, function (err, movie) {
		if (err) return next(err);
		res.json(movie);
	});
});
router.get('/:id/cover', Auth.ensureAuthorized, function (req, res, next) {
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
		var like = {
			profile: req.profile.id,
			movie: movie._id,
		};

		// Find the document
		Like.find(like).exec(function (err, likes) {
			if (!likes.length) {
				const newLike = new Like(like);
				newLike.save(function (err, s) {
					if (err) return next(err);
					req.profile.likes.push(newLike);
					req.profile.save(function (err, p) {
						if (err) return next(err);
					});
					movie.likes.push(newLike);
					movie.save(function (err, p) {
						if (err) return next(err);
					});
					//res.json(movie.likes)
					res.json(movie);
				});
			} else {

				res.json(movie);
			}

		});
	});
});
router.post('/:id/share', Auth.ensureAuthorized, function (req, res, next) {

	Movie.findById(req.params.id, function (err, movie) {
		if (err) return next(err);

		Profile.findById(req.body.user, function (err, toProfile) {
			if (err) return next(err);
			//new Share
			var share = new Share({
				from: req.profile._id,
				to: toProfile.id,
				message: req.body.message,
				movie: movie.id,
				date: new Date()
			});
			share.save(function (err, s) {
				if (err) return next(err);

				req.profile.shares.push(share);
				req.profile.save(function (err, p) {
					if (err) return next(err);
				});
				toProfile.shares.push(share);
				toProfile.save(function (err, p) {
					if (err) return next(err);
				});
				movie.shares.push(share);
				movie.save(function (err, p) {
					if (err) return next(err);
				});
				res.json(movie);
			});
		});





	});

});



module.exports = router;
