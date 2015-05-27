var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Profile = require('../models/Profile.js');

/*************************************************************/
/* WE NEED MOOAAAR!! ENGINEERS                               */
/* AKA TEST ENGINEERS                                        */
/*************************************************************/

var security_issuer = {
	ultra_password: 'movieorama',
	superSecret: 'THi$1$4$3cr3tP4s$Phr4S3'
};

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

router.post('/login', function(req, res) {

	// find the user
	Profile.findOne({
		username: req.body.username
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
				profile.token = jwt.sign({username: profile.username}, security_issuer.superSecret, {
					expiresInMinutes: 20 // expires in 20 minutes
				});
				profile.save(function(err, profile_token) {
					if (err) throw err;
					res.json({
						success: true,
						message: 'Enjoy your token!',
						token: profile_token.token
					});
				});


			}

		}

	});
});

//Function to pass to the requiring authorization routes
function ensureAuthorized(req, res, next) {
	var token = req.body.token || req.params.token || req.headers['x-access-token'];
	// decode token

	if (token) {
		// verifies secret and checks exp
		jwt.verify(token, security_issuer.superSecret,function(err, decoded) {
			if (err) {

				return res.json({
					success: false,
					message: 'Failed to authenticate token.'
				});
			}
			else {
				// if everything is good, save to request for use in other routes
				var query = Profile.where({ token: req.token });
			     query.findOne(function(err, profile) {
                    	if (err) throw err;
					req.profile = profile;
					req.decoded = decoded;
					req.token = token;
					next();
				});

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
router.get('/check', ensureAuthorized, function(req, res) {
		res.json(req.profile);
});

router.post('/logout', ensureAuthorized, function(req, res) {
	//req.profile.token = "";
	console.log("USER LOGGED OUT!");
	res.json({
		success: true,
		message: 'User was unauthorized. Token removed.'
	});
});

module.exports = {
	router: router,
	ensureAuthorized: ensureAuthorized};
