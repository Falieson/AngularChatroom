console.log('now listening to hello world');
var http = require('http');

var handler = function(req, res) {
  res.end('hello world!');
};


var server = http.createServer(handler);

server.listen(3000);

module.exports.handler = handler;


