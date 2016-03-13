var server = require("../../server");

describe("application server", function(){

  it('should have a host', function(){
    expect(server.info.host).to.equal('localhost');
  });

  it('should be listening on the default port', function(){
    expect(server.info.port).to.equal(8055);
  });
});
