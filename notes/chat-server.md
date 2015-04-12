#Chat Server

##Express Routes

Express gives you several shortcuts for working with http verbs.

```javascript

app.get( '/:resource', function(req, res, next) { /* ...  */});
app.post( '/:resorurce', function(req, res, next) { /* ...  */});
app.put('/:resource', function(req, res, next) { /* ...  */});
app.delete('/:resource', function(req, res, next) { /* ...  */});

```

###Objectives: 

* get signup working!
* get signin working!
* post a message
* retrieve messages

###extras

* passwords are being stored in plain text, this is like total bad news bears!, encrypt it
* switch to a mongodb backend! I've written some boiler code that you guys can use
* write your own json parsing middleware







