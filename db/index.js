var r = require('rethinkdb');
r.connect({ host: '192.168.39.39', port: 28015 }, function(err, conn) {
  if (err) throw err;
  console.log("connection: ", conn);
});
