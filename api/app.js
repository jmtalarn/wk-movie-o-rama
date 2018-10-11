
// # Start database
// mongod
//
// # Start Webserver (in other terminal tab)
// DEBUG=wk-movie-o-rama ./bin/www
//
// # Test API (in other terminal tab)
// curl localhost:3000/todos
// # => []%
const mongoOptions = {
	port: process.env.MONGO_PORT || 27027,
	address: process.env.MONGO_ADDRESS || 'mongodb://localhost',
	database: 'wk-movie-o-rama',
	//databasePath: './api/data/db',
	//mongodBinary: process.env.MONGO_BINARY || '/Users/esl-joanta/mongodb-osx-x86_64-3.6.5/bin/mongod'
};

var express = require('express');

var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect(`${mongoOptions.address}:${mongoOptions.port}/${mongoOptions.database}`, function (err) {
	if (err) {
		console.log('connection error', err);
	} else {
		console.log('connection successful');
	}
});


var routes = require('./routes/index');
var movies = require('./routes/movies');
var profiles = require('./routes/profiles');
var auth = require('./routes/auth');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', routes);
var api_base_url = "/api";
app.use(api_base_url + '/movies', movies);
app.use(api_base_url + '/profiles', profiles);
app.use(api_base_url + '/auth', auth.router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
app.use(function (err, req, res, next) {
	console.error(err);
	res.status(err.status || res.status || 500);
	res.json({
		message: err.message,
		error: err
	});
	// res.render('error', {
	//   message: err.message,
	//   error: err
	// });
});
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


module.exports = app;
