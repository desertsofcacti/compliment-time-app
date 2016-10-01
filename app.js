var express = require('express');
var app = express();
var server = require('http').Server(app);
var swig = require('swig');
var path = require('path');

app.set('port', (process.env.PORT || 3333));

// app.get('/', function (req, res) {
//       res.sendfile ('./public/index.html')
//     });

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
      console.log('Node app on port', app.get('port'))
    });

var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.emit('server event', { fizz: 'pop' });
  socket.on('client event', function (data) {
    console.log(data);
  });
});


// exports.config = {
//   'server': {
//     'path': 'app.js',
//     'port': '3333',
//     'base': '/',
//     'run': 'yes'
//   }
// };

// exports.startServer = function (port, path, callback) {
//
//     app.get('/', function (request, response) {
//       response.sendfile ('./public/index.html')
//     }
//     app.use(express.static(__dirname + '/public'));
//     app.listen(app.get(port), function() {
//       console.log('Node app on port', app.get('port'));
//     });
//
// };
