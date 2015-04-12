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

  it('returns a jwt for loggin in', function(done) {
    var req = {
      body: {
        username: 'peter@example.com',
        password: 'noderocks!'
      }
    };

    var res = {
      send: function(data) {
        console.log('data', data)
        jwt.verify(data.token, config.secret, function(err, decoded) {
          if (err) { return done(err) }
          console.log('err', decoded)
          decoded.username.should.equal('peter@example.com');
          done()
        });
      }
    }

    handlers.session.login(req, res);
  });


  it('lets me post a message', function(done) {
    var req = {
      body: {
        message: "hi everybody"
      },
      user: {
        username: 'peter@example.com'
      }
    };

    var res = {
      send: function(data) {
        data.status.should.equal('success');
        done();
      }
    };

    handlers.chatMessages.push(req, res);
  });

  it('gets back messages', function(done) {
    var req = {
    
    };
    var res = {
      send: function(data) {
        data.messages.length.should.equal(1);
        data.messages[0].message.should.equal('hi everybody');
        done();
      }
    };

    handlers.chatMessages.read(req, res);
  });


  /* advanced */

  xit('takes a timestamp and ony returns messages after that', function() {
  
  
  });

  

  







});








