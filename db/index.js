var r = require('rethinkdb');

var db = function connectRethinkDB(config){

  r.connect({ host: config.host, port: config.port }, function(err, conn) {
    if (err) throw err;
    console.log("connection: ", conn);
  });
}

module.exports = db;
