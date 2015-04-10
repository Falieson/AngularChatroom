/* a basic in memory store */

var Chatroom = function() {
  this.messages = [];
};

Chatroom.prototype = {
  pushMessage: function(msg) {
    msg.timestamp = Date.now();
    this.messages.push(msg);
    return this;
  },
  getMessages: function() {
    return messages.sort(function(msg1, msg2) {
      return msg1.timestamp - msg2.timestamp;
    });
  }
};

module.exports.Chatroom = Chatroom;


var UserCollection = function() {
  this.users = {};
};

UserCollection.prototype = {
  create: function(username, password) {
    this.users[username] = {
      username: username,
      password: password
    };
    return this;
  },
  find: function(username, password) {
    return this.users[username];
  }
};

module.exports.UserCollection = UserCollection;


