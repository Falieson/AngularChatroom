var mocha = require('mocha');
var should = require('should');

var handler = require('../index.js').handler;

describe('helloServer', function() {
  it('should return Hello world', function(done) {
    var res = {
      end: function(val) {
        val.should.equal('hello world!');
        done();
      }
    };
    handler({}, res);
  
  });
});
