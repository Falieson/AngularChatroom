var mocha = require('mocha');
var should = require('should');
var echoHandler = require('../echo.js').echoHandler;
var util = require('utils');
var EventEmitter = require('events').EventEmitter;

var RequestMock = function() {
  EventEmitter.call(this);
};

util.inherits(RequestMock, EventEmitter);

RequestMock.pushData = function(data) {
  var self = this;
  setTimeout(function() {
    self.emit('data', data);
  }, 0);
};

RequestMock.endPost = function() {
  var self = this;
  setTimeout(function() {
    self.emit('end');
  }, 0);
};


describe('echoHandler', function() {
  it('should echo a result back', function(done) {
    var ping = "Hello world";
    var request = new RequestMock();
    var response = {
      writeHead: function(status, data) {
        status.should.equal(200);
      },
      end: function(res) {
        res.should.equal(ping);
        done();
      }
    }

    echoHandler(request)
  });


});
