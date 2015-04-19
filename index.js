// setup
var express = require('express');
var app = express();
var path = require('path');
var jwt = require('express-jwt');
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

var config = require('./config');
var handlers = require('./handlers');

mongoose.connect('localhost/AngularChatroom');

// config
app.use('/', express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


//login routes
app.post('/session/login', handlers.session.login);
app.post('/user/signup', handlers.user.signup);

//all routes after this need to be logged in
// TODO: uncomment
// app.use(jwt({
//   secret: config.secret
// }));

app.get('/messages', handlers.chatMessages.read);
app.post('/messages', handlers.chatMessages.push);


//catch all error handler
app.use(function(err, req, res, next) {
  res.status(400).send({
    message: err.message
  });
});

console.log('now listening on port 3000');
app.listen(3000);
