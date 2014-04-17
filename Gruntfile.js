/*
 * grunt-dum-tpl
 * https://github.com/koglerjs/grunt-dum-tpl
 *
 * Copyright (c) 2014 Jim Kogler
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {
  "use strict";
  // Project configuration.
  grunt.initConfig({
    jshint : {
      all : ["Gruntfile.js", "tasks/*.js"],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    "dum_tpl": {
        main: { 
        options: {
          varName : "tpls",
          notGlobal: true
        },
        files: [{
          src : "test/fixtures/**/*.tpl",
          dest: "tmp/tpls.js"
        }]
      }
    },
    clean : {
      tests : ["tmp"]
    },
    nodeunit: {
      tests: "test/*_test.js"
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'dum_tpl', 'nodeunit']);

  grunt.registerTask('default', ['jshint', 'test']);

};
