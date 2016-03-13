var Hapi = require('hapi');
var Config = require('../lib/config');
var routes = require('./routes');
var logs = require('./logs');
var Path = require('path');

var server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.resolve(__dirname, '../src/app')
      }
    }
  }
});

server.connection({
  host: Config.get('ip'),
  port: Config.get('port'),
  labels: 'app'
});

routes(server);
logs(server);

module.exports = server;
