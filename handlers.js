var Store = require('./store-service');
var config = require('./config');

var jwt = require('jsonwebtoken');

var chatroom = new Store.Chatroom();
var Users = new Store.UserCollection();


module.exports.session = {
  login: function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    Users.search(username, password)
    .then(function(user) {
      var token = jwt.sign({
        username: user.username
      }, config.secret);
      //send the token back
      res.send({
        token: token
      });
    })
    .catch(function(err) {
      console.log('$$$', err)
      next(err);
    });
  }
};

module.exports.user = {
  signup: function(req, res, next) {
    console.log('hit')
    var username = req.body.username;
    var password = req.body.password;
    return Users.signup(username, password)
    .then(function(user) {
      var token = jwt.sign({
        username: user.username
      }, config.secret);
      //send the token back
      res.send({
        token: token
      });
    });
  }
};

module.exports.chatMessages = {
  push: function(req, res, next) {
    var username = req.user.username;
    var message = req.body.message;
    chatroom.pushMessage({
      username: username,
      message: message
    })
    .then(function() {
      res.send({
        status: 'success'
      })
    })
    .catch(next);
  },
  read: function(req, res, next) {
    chatroom.retrieve().then(function(messages) {
      res.send({
        messages: messages
      });
    })
    .catch(next);
  },
};












