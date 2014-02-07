module.exports = function(config) {
  config.set({
    basePath: '../',
    files : [
      'lib/jquery.js',
      'lib/angular.js',
      'lib/angular-*.js',
      'app/scripts/**/*.js',
      'test/unit/**/*.js',
      'app/templates/*.html'
    ],
    
    exclude: [
      'lib/angular-loader.js',
      'lib/angular-scenario.js',
    ],
    
    ngHtml2JsPreprocessor: {
      stripPrefix: 'app'
    },

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    reporters: ['spec'],

    preprocessors: {
      'app/templates/*.html': 'ng-html2js'
    },


    colors: true
  });
};
