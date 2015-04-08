
#Hello world (And how I learned to love Node.js)

Ok so we're going to begin with the anatomy of a Basic node
web server.

##Resources

* [Node docs](https://nodejs.org/api/modules.html)
* [Node standard library](https://nodejs.org/api/)
* [http module](https://nodejs.org/api/http.html)

The simplest version of node we can create is a hello world

```javascript

//hello.js
console.log('hello world');

```

Ok not so interesting. You guys came here to make a web server!
Luckily, node has some great built in libraries for creating 
fast and powerful, event-driven web servers.

To create a web server, we call the http module.

```javascript
var http = require('http');
```

The http module is the library we need to access http
serving functionality.

#### http.createServer(callback)

Takes a callback function. It *returns* an instance of httpServer.
Whenever a request comes in, the httpServerInstance generates a request 
and response object and passes it into the callback.

```javascript

var handler = function(req, res) {
  res.end('hello world!');
};

var server = http.createServer(handler);

```

Once we have the server instance, we call *listen()* specifying a port
it should listen on.

```javascript
server.listen(3000); //listen on port 3000
```

###Excercises

1. make it say your name!!



