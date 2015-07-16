var chai = require('chai');
var expect = require('chai').expect;
var chaiHttp = require('chai-http');
var fs = require('fs');
var startServer = require('../server').startServer;

chai.use(chaiHttp);

describe('server.js', function() {
  before(function() {
    startServer('/');
  });

  it('should have a statusCode of 200 for "/" request', function(done) {
    chai.request('localhost:3000')
      .get('/')
      .then(function(response) {
        expect(response.statusCode).to.eql(200);
        done();
      });
  });

  it('should respond with JSON object', function(done) {
    chai.request('localhost:3000')
      .get('/')
      .then(function(response) {
        expect(typeof(response.body)).to.equal('object');
        done();
      });
  });

  it('should return the contents of the data folder on a ' +
      'GET request to "/data"', function(done) {
      chai.request('localhost:3000')
        .get('/data')
        .then(function(response) {
          expect(fs.readdirSync('./data')).to.eql(response.body);
          done();
        });
  });

  it('should return statusCode 404 if invalid route', function(done) {
    chai.request('localhost:3000')
      .get('/lfdkjoie98097')
      .then(function(response) {
        expect(response.statusCode).to.eql(404);
        done();
      });
  });

  it('should save a new file on "POST request ONLY if path is "/data"', function(done) {
    chai.request('localhost:3000')
      .post('/somethingElse')
      .send({ name: 'Jason'})
      .then(function(response) {
        expect(response.statusCode).to.eql(404);
        done();
      });
  });

  it('should save a new file on "POST request', function(done) {
    chai.request('localhost:3000')
      .post('/data')
      .send({ name: 'Jason'})
      .then(function(response) {
        // expect a new file to be created
        done();
      });
  });
});
