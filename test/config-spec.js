var config = require("../lib/config.js");

describe("config", function(){
  context("has default values", function(){
    it ("includes an ip", function(){
      expect(config.get("ip")).to.eql("127.0.0.1");
    });

    it("includes a port", function(){
      expect(config.get("port")).to.eql(3132);
    });
  });
});
