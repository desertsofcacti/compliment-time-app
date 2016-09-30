module.exports = function (port, path, callback) {

  const myServer = http.createServer();
  myServer.listen(port, callback);
  myServer.on('request', function (req, res));
  return myServer;
  },

  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },

  stylesheets: {joinTo: 'app.css'}
    },

  plugins: {
      babel: {presets: ['es2015', 'react']}
    }
  };
