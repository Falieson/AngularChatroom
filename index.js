var express = require('express');
var app = express();
var config = require('./config');
var path = require('path');
var jwt = require('express-jwt');
var bodyParser = require('body-parser');
var handlers = require('./handlers');


app.use(bodyParser.json());

//login routes
app.post('/session/login', handlers.session.login);
app.post('/user/signup', handlers.user.signup);


app.use('/', express.static(path.join(__dirname, 'public')))

//all routes after this need to be logged in
app.use(jwt({
  secret: config.secret
}));

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





