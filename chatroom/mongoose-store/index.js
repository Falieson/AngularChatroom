

var mongoose = require('mongoose');


var Schema = mongoose.Schema;
var UserSchema = new Schema(require('./user-schema').schema);

UserSchema.static('signup', function(username, password) {
  //code here
});

UserSchema.static('search', function(username, passsword) {

});


var MessageSchema = new Schema(require('./message-schema').schema);

MessageSchema.static('pushMessage', function(msg) {
  /* code here */
});

MessageSchema.static('retrieve', function() {
  /* code here */
});

mongoose.model('User', UserSchema);

mongoose.model('Message', MessageSchema);








