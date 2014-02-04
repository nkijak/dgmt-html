module.exports = function(config) {
  config.set({
    basePath: '../',
    files : [
      'lib/angular.js',
      'lib/angular-*.js',
      'app/assets/app.js',
      'test/unit/**/*.js'
    ],
    
    exclude: [
      'lib/angular-loader.js',
      'lib/angular-scenario.js',
    ],
    

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    reporters: ['progress'],


    colors: true
  });
};
