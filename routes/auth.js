var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Profile = require('../models/Profile.js');

var security_issuer = {
	ultra_password: 'movieorama',
	superSecret: 'THi$1$4$3cr3tP4s$Phr4S3'
};

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

var SessionToken = require('../models/SessionToken.js');

router.post('/login', function(req, res) {

	// find the user
	Profile.findOne({
		name: req.body.name
	}, function(err, profile) {

		if (err) throw err;

		if (!profile) {
			res.json({
				success: false,
				message: 'Authentication failed. User not found.'
			});
		}
		else if (profile) {

			// check if password matches
			if (security_issuer.ultra_password != req.body.password) {
				res.json({
					success: false,
					message: 'Authentication failed. Wrong password.'
				});
			}
			else {

				// if user is found and password is right
				// create a token
				profile.token = jwt.sign(profile, security_issuer.superSecret, {
					expiresInMinutes: 20 // expires in 20 minutes
				});
				profile.save(function(err, profile_token) {
					if (err) throw err;
					res.json({
						success: true,
						message: 'Enjoy your token!',
						token: token
					});
				});


			}

		}

	});
});

//Function to pass to the requiring authorization routes 
function ensureAuthorized(req, res, next) {
	var token = req.body.token || req.param('token') || req.headers['x-access-token'];

	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, security_issuer.superSecret, function(err, decoded) {
			if (err) {
				return res.json({
					success: false,
					message: 'Failed to authenticate token.'
				});
			}
			else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;
				req.token = token;
				next();
			}
		});

	}
	else {

		// if there is no token
		// return an error
		return res.status(403).send({
			success: false,
			message: 'No token provided.'
		});

	}

};

router.post('/logout', ensureAuthorized, function(req, res) {


});