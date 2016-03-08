module.exports = function(server){
  var goodOptions = {
      reporters:[{
        reporter: require("good-console"),
        events: {
          log: '*',
          response: '*'
        }
      }]
  };

  server.register({
    register: require('good'),
    options: goodOptions
  }, function(err){

    if (err){
      throw err;
    }
  });
};
