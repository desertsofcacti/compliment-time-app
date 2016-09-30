var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

exports.config = {
  'server': {
    'path': 'app.coffee',
    'port': '3333',
    'base': '/',
    'run': 'yes'
  }
};

exports.startServer = function (port, path, callback) {

    app.get('/', function (request, response) {
      response.sendfile ('./public/index.html')
    }
    app.use(express.static(__dirname + '/public'));
    app.listen(app.get(port), function() {
      console.log('Node app on port', app.get('port'));
    });
  
};
