const webpackTestConfig = require('./tests/config');
module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['mocha', 'chai'],
    port: 9999,
    files: [
      'tests/index.js'
    ],
    exclude: [],
    preprocessors: {
      'tests/index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackTestConfig,
    webpackMiddleware: {
      noInfo: true
    },
    reporters: [
      'spec',
      'coverage-istanbul',
    ],
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      dir: 'tests/coverage',
      'report-config': {
        html: { subdir: 'html' },
        lcovonly: { subdir: 'lcov' }
      }
    },
    plugins: [
      require('karma-webpack'),
      require('karma-chai'),
      require('karma-mocha'),
      require('karma-chrome-launcher'),
      require('karma-sourcemap-loader'),
      require('karma-spec-reporter'),
      require("karma-coverage-istanbul-reporter"),
      require('karma-mocha-reporter')
    ],
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: false,
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
