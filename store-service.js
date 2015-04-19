/* a basic in memory store */

//return promise to simulate async operations
var Promise = require('bluebird');


var Chatroom = function() {
  this.messages = [];
};

Chatroom.prototype = {
  pushMessage: function(msg) {
    msg.timestamp = Date.now();
    var self = this;
    return Promise.try(function() {
      self.messages.push(msg);
      return self;
    });
  },
  retrieve: function() {
    var self = this;
    return Promise.try(function() {
      return self.messages.sort(function(msg1, msg2) {
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
  signup: function(username, password) {
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
  search: function(username, password) {
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


