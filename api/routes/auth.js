var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Profile = require('../models/Profile.js');

var security_issuer = {
	ultra_password: 'movieorama',
	superSecret: 'THi$1$4$3cr3tP4s$Phr4S3'
};

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

router.post('/login', function (req, res) {

	// find the user
	Profile.findOne({
		username: req.body.username
	}, function (err, profile) {

		if (err) throw err;

		if (!profile) {
			res.status(401); //Unauthorized
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
				profile.token = jwt.sign(
					{ username: profile.username },
					security_issuer.superSecret,
					{ expiresIn: '5m' }); // expires in 5 minutes
				profile.save(function (err, profile_token) {
					if (err) throw err;
					res.json({
						success: true,
						message: 'Enjoy your token!',
						token: profile_token.token,
						id: profile._id
					});
				});


			}

		}

	});
});

//Function to pass to the requiring authorization routes
function ensureAuthorized(req, res, next) {
	var token = req.body.token || req.params.token || req.headers[ 'x-access-token' ];
	// decode token
	console.log("Analyzing token ... ", token);
	if (token) {
		console.log("Token exists, going to verify it...");
		// verifies secret and checks exp
		jwt.verify(token, security_issuer.superSecret, function (err, decoded) {
			if (err) {
				console.log(err);
				return res.status(401).send({
					success: false,
					message: 'Failed to authenticate token. ' + err.message
				});
			}
			else {
				console.log("NO ERROR VALIDATING TOKEN");
				// if everything is good, save to request for use in other routes
				var query = Profile.where({ token });

				query.findOne(function (err, profile) {
					if (err) throw err;
					if (profile) {
						req.profile = profile;
						req.decoded = decoded;
						req.token = token;
						next();
					} else {
						return res.status(401).send({
							success: false,
							message: 'Not active user with token provided'
						});
					}
				});

			}
		});
	}
	else {
		console.log("Token doesn't exists...");
		// if there is no token
		// return an error
		return res.status(403).send({
			success: false,
			message: 'No token provided.'
		});

	}

};
router.get('/check', ensureAuthorized, function (req, res) {
	res.json(req.profile);
});

router.post('/logout', ensureAuthorized, function (req, res) {
	req.profile.token = "";
	console.log("USER LOGGED OUT!");
	res.json({
		success: true,
		message: 'User was unauthorized. Token removed.'
	});
});

module.exports = {
	router: router,
	ensureAuthorized: ensureAuthorized
};
