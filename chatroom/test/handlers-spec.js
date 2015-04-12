var mocha = require('mocha');
var should = require('should');

describe('handlers', function() {
  var handlers = require('../handlers.js');
  /* basic requirements */

  it('lets me sign up', function(done) {
    var req = {
      body: {
        username: 'peter@example.com',
        password: 'noderocks!'
      }
    },
    var res: {
      status: function(st) {
        st.should.equal(200);
        return this;
      },
      send: function(data) {
        data.status.should.equal('200')
        done();
      }
    }

    handlers.user.signup(req, res, )


  });

  xit('takes an encoded jwt, and puts the data in the body!', function() {
    
  
  });

  xit('returns a jwt for loggin in', function() {
  
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








