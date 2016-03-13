var server = require('./server');

server.start(function(err){
    if (err){
      throw err;
    }
    console.log(`Started at: ${server.info.uri}`);
});
