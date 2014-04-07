'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      src: {
        files: [{
            flatten: true,
            expand: true,
            cwd: 'src',
            src: ['**'],
            dest: 'site'
          }
        ]
      }
    },

    watch: {
      scripts: {
        files: 'src/**/*',
        tasks: 'default'
      }
    },

    clean: {
      tmp: ['tmp/**/*', 'site/**/*']
    },

    bower: {
      install: {
        options: {
          flatten: true,
          targetDir: 'site/lib',
          verbose: true,
          cleanTargetDir: true,
          cleanBowerDir: false,
          bowerOptions: {}
        }
      }
    },

    'gh-pages': {
      options: {
        base: 'site',
        branch: 'gh-pages'
      },
      src: ['**']
    }

  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-bower-task');

  // Default tasks to be run.
  grunt.registerTask('default', [
    'clean',
    'bower',
    'copy:src'
  ]);

};
