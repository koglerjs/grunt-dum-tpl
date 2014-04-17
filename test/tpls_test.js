//just a very basic test.  

var grunt = require('grunt');
var fs = require('fs');

exports.dum_tpl = {
  setUp: function(done) {
    done();
  },
  basic: function(test) {
  	test.expect(1);

    var actual, expected;
    actual = grunt.file.read("tmp/tpls.js");
    expected = grunt.file.read("test/expected/basic/final.js");

    test.equal(actual, expected, "Compiling and bundling two basic templates.");

    test.done();
  }
};