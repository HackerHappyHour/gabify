var Hapi = require('hapi');
var server = new Hapi.Server();

/**
* `host` and `port` are pulled from `package.json`'s config keys,
* and can be overridden one of 4 ways:
*    - by running `npm config set @h3/impact:port 80`
*    - setting NPM_CONFIG_PORT=80
*    - place a `.npmrc` in the root of the project with  `port = 80` on a line
*    - add a command line param `node ./index.js --port 80`
**/
server.connection({
  host: process.env.npm_package_config_host,
  port: process.env.npm_package_config_port
});

module.exports = server;
