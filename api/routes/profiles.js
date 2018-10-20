var express = require('express');
var router = express.Router();
var Auth = require('../routes/auth.js');
var mongoose = require('mongoose');
var Profile = require('../models/Profile.js');

var image_contentType = 'image/png';

/* GET /profiles listing. */
// Not ensuring authorized as this endpoint is used to get all profiles to login
router.get('/', function (req, res, next) {
	Profile.find(function (err, profiles) {
		if (err) return next(err);
		var result = [];
		profiles.forEach(function (p) {
			result.push({
				id: p._id,
				username: p.username,
				likes: p.likes,
				shares: p.shares,
			}
			);

		});
		res.json(result);
	});
});
router.get('/:id', Auth.ensureAuthorized, function (req, res, next) {
	Profile.findById(req.params.id)
		.populate({
			path: 'likes',
			populate: { path: 'movie', select: 'title _id' }
		})
		.populate({
			path: 'shares',
			populate: [
				{ path: 'to', select: 'username _id' },
				{ path: 'from', select: 'username _id' }
			],
		})

		.exec(function (err, profile) {
			if (err) return next(err);
			var result = {
				id: profile._id,
				username: profile.username,
				likes: profile.likes,
				shares: profile.shares,
			};

			res.json(result);
		});
});
router.get('/:id/avatar', function (req, res, next) {
	Profile.findById(req.params.id, function (err, p) {
		if (err) return next(err);
		res.contentType(image_contentType);
		res.send(p.image);
	});
});
module.exports = router;
