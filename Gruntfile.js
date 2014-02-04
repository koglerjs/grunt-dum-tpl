/*
 * grunt-dum-tpl
 * https://github.com/koglerjs/grunt-dum-tpl
 *
 * Copyright (c) 2014 Jim Kogler
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    "dum_tpl": {
        main: { 
        options: {
          tplLib : "tpls"
        },
        files: [{
          src : "test/fixtures/**/*.tpl",
          dest: "test/tpls.js"
        }]
      }
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'dum_tpl', 'nodeunit']);

  grunt.registerTask('default', ['dum_tpl']);

};
