
#Echo Server - taking input

##Resources
* [http library](https://nodejs.org/api/http.html)

##Objective

We've gotten a basic echo server out of the way.
Of course its kinda boring to just have a hello world server.
Like any good computer program, a web application should take
input and return output.

In this Sprint, we will be showing how to create a webserver
that accepts input from an ajax post and return it back to the
requester.

###Http methods

When a request comes in, an http request has one of several
verbs. Suffice to say, the big REST oriented verbs you should 
know about are GET, POST, PUT, DELETE.

###Load a page on GET but not POST

The request method has a property called method. This coresponds
to the verb of the http call. we can load a page conditionally
using this property.

```javascript
var http = require('http');
var fs = require('fs');
var path = require('path');
//get the relative path to the direcory of the boot file
var publicPath = path.join(__dirname, 'public');

var echoHandler = function(req, res) {
  if (req.method === 'POST') {
    handlePOST(req, res);
  } else {
    fs.createReadStream(path.join(publicPath, 'index.html'), {
      encoding: 'utf8'
    }).pipe(res);
  }
};

var server = http.createServer(echoHandler);
server.listen(3000);

```

###Handeling POST data

When data is posted, its being sent up as a stream of data.
Since posted data comes in asynchronously, We are presented with the 
challenge of collecting posted data as it comes in and performing an action.

Remember how the server passes a request and response object into
the handler callback? Both of these objects are derived from the *EventEmitter*
Object. This Object represents one of the primary abstractions node gives
us to deal with sycnhronous events.

It has two methods

* eventEmitter.on(eventName, cb)
* eventEmitter.emit(eventName, arg1, arg2...)

the request object gives us access to posted data as it comes in via the 
'data' event. It will keep emitting this event until the 'end' event is emitted.

```javascript
function handlePOST(req, res) {
  var inputData = '';
  req.on('data', function(data) {
    console.log('polling data ', data)
    inputData += data;
  });

  req.on('end', function() {
    console.log('end transmission', inputData);
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    })

    res.end(inputData);
  });

  req.on('error', function(err) {
    res.writeHead(400, {
      'Content-Type': 'text/json'
    });
    res.end(JSON.stringify(err));
  });
}

```

####Excercises

1. modify program to return "Hello " + your name
2. req.url provides the url entered. Use it to create diffrent branches of logic.








