//https://thewayofcode.wordpress.com/2013/04/21/how-to-build-and-test-rest-api-with-nodejs-express-mocha/

var should = require('should');
var shouldhttp = require('should-http');
var assert = require('assert');
var request = require('supertest');
var mongoose = require('mongoose');
var winston = require('winston');


describe('Routing', function() {
  var url = 'http://localhost:3000';
  // within before() you can run all the operations that are needed to setup your tests. In this case
  // I want to create a connection with the database, and when I'm done, I call done().
  before(function(done) {
    // In our tests we use the test db
    mongoose.connect('mongodb://localhost/wk-movie-o-rama');
    done();
  });
  // use describe to give a title to your test suite, in this case the tile is "Account"
  // and then specify a function in which we are going to declare all the tests
  // we want to run. Each test starts with the function it() and as a first argument
  // we have to provide a meaningful title for it, whereas as the second argument we
  // specify a function that takes a single parameter, "done", that we will use
  // to specify when our test is completed, and that's what makes easy
  // to perform async test!
  describe('Profile', function() {
    it('should login with ultra_password', function(done) {
      var profile = {
        username: 'Homer.Simpson',
        password: 'movieorama',
      };
      // once we have specified the info we want to send to the server via POST verb,
      // we need to actually perform the action on the resource, in this case we want to
      // POST on /api/profiles and we want to send some info
      // We do this using the request object, requiring supertest!
      request(url)
        .post('/auth/login')
        .send(profile)
        // end handles the response
        .end(function(err, res) {
          if (err) {
            throw err;
          }
          // this is should.js syntax, very clear
          res.should.have.status(200);
          res.body.should.have.property('token');
          // res.body.firstName.should.equal('JP');
          // res.body.lastName.should.equal('Berd');
          // res.body.creationDate.should.not.equal(null);
          done();
        });
    });
  });
});
