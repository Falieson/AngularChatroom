var Store = require('./store-service');
var config = require('./config');

var jwt = require('jsonwebtoken');

var chatroom = new Store.Chatroom();
var Users = new Store.UserCollection();


module.exports.session = {
  login: function(req, res, next) {
      
  }
};

module.exports.user = {
  signup: function(req, res, next) {
  
  }
};

module.exports.chatMessages = {
  push: function(req, res, next) {
    
  },
  read: function(req, res, next) {
    
  },
};












