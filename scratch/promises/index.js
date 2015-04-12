var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');
var _ = require('lodash')
/*
fs.readFile(path.join(__dirname, 'file1.txt'), 'utf8', function(err, res) {
  fs.readFile(path.join(__dirname, 'file2.txt'), 'utf8', function(err2, res2) {
    console.log(res + res2)
  });
});
*/


var files = ['file1.txt', 'file.txt'];

Promise.all(_.map(files, function(filename) {
  return fs.readFileAsync(filename, 'utf8')
    .catch(function(err) {
      //console.log('error logged', err)
      throw new Error('arbitrary')
    })

}))
.then(function(data) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(data[0] + data[1]);
    }, 3000)
  });
})
.then(function(contents) {
  console.log(contents);
})
.catch(function(err) {
  console.log('error logged', err)
})


