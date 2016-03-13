var convict = require('convict');

var config = convict({
  ip: {
    doc: "The http server will bind to this IP address",
    format: "ipaddress",
    default: "127.0.0.1",
    env: "IMPACT_IP",
    arg: "ip"
  },
  port: {
    doc: "The http server will listen on this port",
    format: "port",
    default: 3132,
    env: "IMPACT_PORT",
    arg: "port"
  }
});

config.validate({strict: true});
module.exports = config;
