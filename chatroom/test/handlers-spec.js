var mocha = require('mocha');
var should = require('should');
var jwt = require('jsonwebtoken');
var config = require('../config.js');

describe('handlers', function() {
  var handlers = require('../handlers.js');
  /* basic requirements */

  it('lets me sign up', function(done) {
    var req = {
      body: {
        username: 'peter@example.com',
        password: 'noderocks!'
      }
    };
    var res = {
      status: function(st) {
        st.should.equal(200);
        return this;
      },
      send: function(data) {
        jwt.verify(data.token, config.secret, function(err, decoded) {
          if (err) { return done(err) }
          decoded.username.should.equal('peter@example.com');
          done()
        })
        
      }
    };

    handlers.user.signup(req, res)


  });

  xit('returns a jwt for loggin in', function() {
    var req = {
      body: {
        username: 'peter@example.com',
        password: 'noderocks!'
      }
    };

  });

  xit('errors out when given an invalid jwt', function() {
  
  });

  xit('lets me post a message', function() {
  
  });

  xit('gets back messages', function() {
  
  
  });


  /* advanced */

  xit('takes a timestamp and ony returns messages after that', function() {
  
  
  });

  

  







});








