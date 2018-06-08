var MongoBox = require('mongobox').MongoBox;


var options = {
  port: process.env.MONGO_PORT || 27027,
  databasePath: './api/data/db',
  mongodBinary: process.env.MONGO_BINARY || '/Users/esl-joanta/mongodb-osx-x86_64-3.6.5/bin/mongod'
};

function startMongoInstance(){

  var mongobox = new MongoBox(options);

  mongobox.start(function (err) {
    if (err) return console.error('Could not start the database: %s', err);
    return initData();
    //  mongobox.stop(function (err, code) {
    //    if (err) return console.error('Could not stop: %s', err);
    //    console.log('Stopped with code %s', code);
    //  });
  });


  function initData(){
	  /**
	   * Module dependencies
	   */
	  console.log("Requiring modules ...");

	  var fs = require('fs');
	  var mongoose = require('mongoose');
	  var Schema = mongoose.Schema;

	  console.log("Creating constants...");
	  // img path
	  var dataPath = './api/data/';
	  var contentTypes = {
		  movie: 'image/jpeg',
		  profile: 'image/png'
		};

		console.log("Mongoose connect...");

		mongoose.connect('mongodb://localhost:'+options.port+'/wk-movie-o-rama', function(err) {
			if (err) {
				console.log('connection error', err);
			} else {
				console.log('connection successful');
			}
		});
		console.log("Loading Movie Schema...");
		var Movie = require('../models/Movie.js');
		var movies = [
			new Movie({
				title: '12 years a slave',
				description: 'In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.',
				cover: fs.readFileSync(dataPath + '12yearsaslave.jpg'),
			}),
			new Movie({
				title: 'Argo',
				description: 'Acting under the cover of a Hollywood producer scouting a location for a science fiction film, a CIA agent launches a dangerous operation to rescue six Americans in Tehran during the U.S. hostage crisis in Iran in 1980.',
				cover: fs.readFileSync(dataPath + 'Argo.jpg'),
			}),
			new Movie({
				title: 'Birdman',
				description: 'A washed-up actor, who once played an iconic superhero, battles his ego and attempts to recover his family, his career and himself in the days leading up to the opening of his Broadway play.',
				cover: fs.readFileSync(dataPath + 'Birdman.jpg')
			}),
			new Movie({
				title: 'Life is beautiful',
				description: 'When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.',
				cover: fs.readFileSync(dataPath + 'LifeIsBeautiful.jpg')
			}),
			new Movie({
				title: 'The Artist',
				description: 'A silent movie star meets a young dancer, but the arrival of talking pictures sends their careers in opposite directions.',
				cover: fs.readFileSync(dataPath + 'TheArtist.jpg')
			}),
			new Movie({
				title: 'Bumblebee',
				description: 'On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.',
				cover: fs.readFileSync(dataPath + 'Bumblebee.jpg'),
			}),
			new Movie({
				title: 'Guardians of the Galaxy',
				description: 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.',
				cover: fs.readFileSync(dataPath + 'GuardiansOfTheGalaxy.jpg'),
			}),
			new Movie({
				title: 'Jurassic World: The fallen kingdom',
				description: 'When the island\'s dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction - level event.',
				cover: fs.readFileSync(dataPath + 'JurassicWorldFallenKingdom.jpg'),
			}),
		];
		console.log("Loading Profile Schema...");
		var Profile = require('../models/Profile.js');
		var profiles = [
			new Profile({
				username: 'Homer.Simpson',
				image: fs.readFileSync(dataPath + 'Homer.png'),
			}),
			new Profile({
				username: 'Bart.Simpson',
				image: fs.readFileSync(dataPath + 'Bart.png'),
			}),
			new Profile({
				username: 'Gavin.Belson',
				image: fs.readFileSync(dataPath + 'Gavin.png'),
			}),
			new Profile({
				username: 'Erlich.Bachman',
				image: fs.readFileSync(dataPath + 'Erlich.png'),
			}),

		];

		console.log("Removing movies...");
		Movie.remove(function(err) {
			if (err) throw err;
			console.log("Removed old movies");

			console.log("Adding movies...");
			movies.forEach(function(m) {
				m.save(function(err, m) {
					if (err) return console.error(err);
					//console.dir(m);
				});
			});
			console.log("Movies added!");

		});

		console.log("Removing profiles...");
		Profile.remove(function(err) {
			if (err) throw err;
			console.log("Removed old profiles");

			console.log("Adding profiles...");
			profiles.forEach(function(p) {
				p.save(function(err, p) {
					if (err) return console.error(err);
					//console.dir(p);
				});
			});
			console.log("Profiles added!");


		});
	}

}
//startMongoInstance();
module.exports = startMongoInstance;
