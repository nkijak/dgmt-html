module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.initConfig({
    shell: {
      options: {
        stdout: true
      },
      protractor: {
        command: 'node ./node_modules/.bin/protractor ./test/protractor-conf.js'
      },
      protractor_install: {
        command: 'node ./node_modules/protractor/bin/install_selenium_standalone'
      },
      npm_install: {
        command: 'npm install'
      },
      bower_install: {
        command: 'node ./node_modules/bower/bin/bower install'
      },
    },

    connect: {
      options: {
        base: 'app/'
      },
      webserver: {
        options: {
          port: 8888,
          keepalive: true
        }
      },
      devserver: {
        options: {
          hostname: '*',
          port: 8888
        }
      },
      testserver: {
        options: {
          port: 9999
        }
      },
      coverage: {
        options: {
          base: 'coverage/',
          port: 5555,
          keepalive: true
        }
      }
    },

    concat: {
      styles: {
        dest: './app/assets/app.css',
        src: [
          'app/styles/app.css',
          //place your Stylesheet files here
        ]
      },
      scripts: {
        options: {
          separator: ';'
        },
        dest: './app/assets/app.js',
        src: [
          'lib/angular-1.2.0-rc.2/angular.js',
          'lib/angular-1.2.0-rc.2/angular-route.js',
          'app/scripts/app.js',
          'app/scripts/controllers/*.js',
          'app/scripts/services/*.js',
          'app/scripts/directives/*.js',
		  'bower_components/d3/d3.min.js'
          //place your JavaScript files here
        ]
      },
    },

    watch: {
      options : {
        livereload: 7777
      },
      jade: {
        files: ['app/jade-templates/*.jade'],
        tasks: ['jade:compile']
      },
      styles: {
        files: ['app/styles/**/*.css'],
        tasks: ['concat:styles']
      },
      scripts: {
        files: ['app/scripts/**/*.js'],
        tasks: ['concat:scripts', 'jade:compile']
      },
    },

    open: {
      devserver: {
        path: 'http://localhost:8888'
      },
      coverage: {
        path: 'http://localhost:5555'
      }
    },

    karma: {
      unit: {
        configFile: './test/karma-unit.conf.js',
        autoWatch: false,
        singleRun: true
      },
      unit_auto: {
        configFile: './test/karma-unit.conf.js',
        autoWatch: true,
        singleRun: false
      },
      unit_coverage: {
        configFile: './test/karma-unit.conf.js',
        autoWatch: false,
        singleRun: true,
        reporters: ['progress', 'coverage'],
        preprocessors: {
          'app/scripts/**/*.js': ['coverage']
        },
        coverageReporter: {
          type : 'html',
          dir : 'coverage/'
        }
      },
    },

    jade: {
        compile: {
            options: {
                pretty: true
            },
            files: [{
                expand: true,
                src: "*.jade",
                dest: "./app/templates/",
                ext: ".html",
                cwd: "./app/jade-templates/"
            }]
        }
    }
  });

  //single run tests
  grunt.registerTask('test', ['test:unit', 'test:e2e']);
  grunt.registerTask('test:unit', ['karma:unit']);
  grunt.registerTask('test:e2e', ['connect:testserver','shell:protractor']);
  grunt.registerTask('test:coverage', ['karma:unit_coverage']);
  grunt.registerTask('coverage', ['karma:unit_coverage','open:coverage','connect:coverage']);

  //autotest and watch tests
  grunt.registerTask('autotest', ['karma:unit_auto']);
  grunt.registerTask('autotest:unit', ['karma:unit_auto']);

  //installation-related
  grunt.registerTask('install', ['update','shell:protractor_install']);
  grunt.registerTask('update', ['shell:npm_install','shell:bower_install']);

  //defaults
  grunt.registerTask('default', ['dev']);

  //development
  grunt.registerTask('dev', ['update', 'jade:compile', 'concat', 'connect:devserver', 'open:devserver', 'watch']);

  //server daemon
  grunt.registerTask('serve', ['connect:webserver']);
};
