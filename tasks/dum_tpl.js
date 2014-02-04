'use strict';

module.exports = function(grunt) {
	var dum = require("dum-tpl");
	var path = require("path");

	grunt.registerMultiTask('dum_tpl', "Run the DUM template library.", function() {
		var options = this.options({
			varName : "tpls"
		});

		// Iterate over all src-dest file pairs.
		this.files.forEach(function(f) {

			var src = f.src;

			var outArr = [];//f.src(function(filepath) {
			var key, tpl;

			for(var i = 0; i < src.length; i++) {
				if (!grunt.file.exists(src[i])) {
					grunt.log.warn('Source file "' + src[i] + '" not found.');
					return false;
				} 
				else {
					tpl = grunt.file.read(src[i])

					key = path.basename(src[i]).split(".");
					key.pop();
					key = key.join("");

					dum.addTplToPackage(tpl, key, "__grunt");
				}
			}			

			var out = dum.packageToString(options, "__grunt")

			grunt.file.write(f.dest, out);

			grunt.log.writeln('File ' + f.dest + ' created.');
		});
	});
}
