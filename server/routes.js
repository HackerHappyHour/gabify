var inert = require('inert');
var Path = require('path');

module.exports = function(server){

  server.register(inert, function(err){

    if(err){
      throw err;
    }

    server.route({
      method: 'GET',
      path: '/{path*}',
      handler: {
        directory:{
          path: Path.join(__dirname,'../src/app'),
          listing: false,
          index: true
        }
      }
    });

  });
};
