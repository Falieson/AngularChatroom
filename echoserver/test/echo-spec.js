var mocha = require('mocha');
var should = require('should');
var echoHandler = require('../echo.js').echoHandler;
var util = require('util');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var RequestMock = function(opt) {
  EventEmitter.call(this);
  _.extend(this, opt || {});
};

util.inherits(RequestMock, EventEmitter);

RequestMock.prototype.pushData = function(data) {
  var self = this;
  setTimeout(function() {
    self.emit('data', data);
  }, 0);
};

RequestMock.prototype.endPost = function() {
  var self = this;
  setTimeout(function() {
    self.emit('end');
  }, 0);
};


describe('echoHandler', function() {
  it('should echo a result back', function(done) {
    var ping = "Hello world";
    var request = new RequestMock({
      method: 'POST'
    });
    var response = {
      writeHead: function(status, data) {
        status.should.equal(200);
      },
      end: function(res) {
        res.should.equal(ping);
        done();
      }
    }

    echoHandler(request, response);
    request.pushData(ping);
    request.endPost();

  });

});
