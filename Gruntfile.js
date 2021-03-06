module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      templates: {
        files: ['jade/*.jade', 'jade/*.pug'],
        tasks: ['pug'],
        options: {
          spawn: false
        }
      },
      styles: {
        files: ['sass/*.scss'],
        tasks: ['compass'],
        options: {
          spawn: false
        }
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'styles/main_global.css': 'sass/main_global.scss'
        }
      }
    },
    pug: {
      debug: {
        options: {
          data: {
            client: false,
            debug: true,
            pretty: true
          }
        },
        files: [{
          cwd: "jade/",
          src: "*.jade",
          dest: "",
          expand: true,
          ext: ".html"
        }]
      },
      release: {
        options: {
          data: {
            client: true,
            debug: false,
            pretty: false
          }
        },
        files: [{
          cwd: "jade/",
          src: "*.jade",
          dest: "",
          expand: true,
          ext: ".html"
        }]
      }
    },
    jade: {
      compile: {
        options: {
          client: false,
          pretty: true
        },
        files: [{
          cwd: "jade/",
          src: "*.jade",
          dest: "",
          expand: true,
          ext: ".html"
        }]
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['watch']);
};