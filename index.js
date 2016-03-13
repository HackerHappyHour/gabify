var Config = require("./lib/config");
var server = require('./server');
var db = require('./db');

server.start(function(err){
    if (err){
      throw err;
    }
    console.log(`Started at: ${server.info.uri}`);
});
