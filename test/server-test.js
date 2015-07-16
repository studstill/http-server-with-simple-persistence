var chai = require('chai');
var expect = require('chai').expect;
var chaiHttp = require('chai-http');
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
        console.log(response.statusCode);
        expect(response.statusCode).to.eql(200);
        done();
      });
  });

  it('should respond with JSON object', function(done) {
    chai.request('localhost:3000')
      .get('/')
      .then(function(response) {
        console.log(response.body);
        expect(typeof(response.body)).to.equal('object');
        done();
      });
  });
});
