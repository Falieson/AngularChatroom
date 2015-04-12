#Echo Server in express.js

In the last sprint, you created a a basic echo app in
plain nodejs. Now we're going to recreate that app using 
express!

Unlike the previous 2 sprints, this one is much mroe hands on.

##A basic Express App

```javascript

var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.status(200).send('Hello world!');
});

app.listen(3000);

```

In this case, res.status() and res.send() are convenience methods
added to req, and res that are passed into http.createServer().
When we mount the callback via app.use(), we are injecting it into
the middleware glue layer that express provides.

You may have noticed the *next() paramater passed into the callback, This brings
us to the subject of express middleware.

##middleware

Express does 2 major things

* It wraps request and response with additional convenience methods
* it provides a way to glue together middleware in a continuations passing style

*next* is a callback that calls the next function in the middleware stack.
If is passed an object, that object is assummed to be an error and express
skips all subsequent handlers till it gets to one that handles errors.

Here's a basic example of an express middleware that simply delays the request 
by 3 seconds.

```javascript

var express = require('express');
var app = express();

app.use(function(req, res, next) {
  setTimeout(function() {
    next();
  }, 3000);
});

app.use(function(req, res, next) {
  res.send('hello world!!');
});

```

Excercise:
* refactor your echo server to use express
* pull out the data extraction logic into a seperate middleware function





