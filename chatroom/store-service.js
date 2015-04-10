/* a basic in memory store */

//return promise to simulate async operations
var Promise = require('bluebird');


var Chatroom = function() {
  this.messages = [];
};

Chatroom.prototype = {
  pushMessage: function(msg) {
    msg.timestamp = Date.now();
    return Promise.try(function() {
      this.messages.push(msg);
      return this;
    });
  },
  getMessages: function() {
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
    return Promise.try(function() {
      this.users[username] = {
        username: username,
        password: password
      };
      return this;
    });
  },
  find: function(username, password) {
    return Promise.try(function() {
      return this.users[username];
    });
  }
};

module.exports.UserCollection = UserCollection;


