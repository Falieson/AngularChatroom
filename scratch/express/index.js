var express = require('express');
var app = express();

app.use(function(req, res, next) {
  //res.send('hello world');
  req.body = "hello Peter";
  next();
});

app.use('/foobar', function(req, res, next) {
  res.send('you clicked foobar');
  next(new Error('message'));
});

app.get('/path', function(req, res, next) {
  

});

app.post( '/path', function(req, res, next) {

})

app.use('/foo', function(err, req, res, next) {

})





app.use(function(req, res, next) {
  res.send(req.body);
})

app.listen(3000);




