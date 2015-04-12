/* a basic in memory store */

//return promise to simulate async operations
var Promise = require('bluebird');


var Chatroom = function() {
  this.messages = [];
};

Chatroom.prototype = {
  push: function(msg) {
    msg.timestamp = Date.now();
    return Promise.try(function() {
      this.messages.push(msg);
      return this;
    });
  },
  get: function() {
    return Promise.try(function() {
      return messages.sort(function(msg1, msg2) {
        return msg1.timestamp - msg2.timestamp;
      });
    });
  }
};

module.exports.Chatroom = Chatroom;


var UserCollection = function() {
  this.users = {};
};

UserCollection.prototype = {
  create: function(username, password) {
    var self = this;
    return Promise.try(function() {
      if (self.users[username]) {
        throw new Error('User already exists');
      }

      self.users[username] = {
        username: username,
        password: password
      };
      return self.users[username];
    });
  },
  find: function(username, password) {
    var self = this;
    return Promise.try(function() {
      var user = self.users[username];
      if (user) {
        if (user.password === password) {
          return user;
        }
      } else {
        throw new Error('user not found');
      }
    });
  }
};

module.exports.UserCollection = UserCollection;


