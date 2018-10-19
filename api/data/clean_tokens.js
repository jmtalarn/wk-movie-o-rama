const options = {
	port: process.env.MONGO_PORT || 27027,
	address: process.env.MONGO_ADDRESS || 'mongodb://localhost',
	database: 'wk-movie-o-rama',
	//databasePath: './api/data/db',
	//mongodBinary: process.env.MONGO_BINARY || '/Users/esl-joanta/mongodb-osx-x86_64-3.6.5/bin/mongod'
};

/**
 * Module dependencies
 */
console.log("Requiring modules ...");

var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log("Mongoose connect...");

mongoose.connect(`${options.address}:${options.port}/${options.database}`, function (err) {
	if (err) {
		console.log('connection error', err);
	} else {
		console.log('connection successful');
	}
});
console.log("Loading Profile Schema...");
var Profile = require('../models/Profile.js');
Profile.find(function (err, profiles) {
	profiles.forEach((profile) => {
		profile.token = "";
		profile.save(function (err, p) {
			if (err) return next(err);
			console.log(p.username, "Cleaned profile token");
		});
	});
});

// db.getCollection('profiles').updateMany(
//     // query
//     {
//     },

//     // update
//     {
//         $set: {token: ''}
//     },

//     // options
//     {
//         "multi" : false,  // update only one document
//         "upsert" : false  // insert a new document, if no existing document match the query
//     }
// );
