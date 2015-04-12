console.log('hello world');

var http = require('http');

var server = http.createServer(function(req, res) {
  res.write('this is some data\n');
  res.write('here is some more data\n');
  res.end('hello world');
});

server.listen(3000);





