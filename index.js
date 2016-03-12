var Config = require("./lib/config");
var server = require('./server');
var db = require('./db');
var routes = require('./server/routes');
var logs = require('./server/logs');

server.start(function(err){
    if (err){
      throw err;
    }

    routes(server);
    logs(server);

    console.log(`Started at: ${server.info.uri}`);
});
