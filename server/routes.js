var inert = require('inert');

module.exports = function(server){

  server.register(inert, function(err){

    if(err){
      throw err;
    }

    server.route({
      method: 'GET',
      path: '/',
      handler: function(request, reply){
        reply.file(`index.html`);
      }
    });

  });
};
