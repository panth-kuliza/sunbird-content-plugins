// Karma configuration
// Generated on Wed Oct 26 2016 15:56:48 GMT+0530 (IST)

module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // bower:js
            'https://s3.ap-south-1.amazonaws.com/ekstep-public-dev/content-editor/scripts/external.min.js',
            'test/baseSpec.js',
            'https://s3.ap-south-1.amazonaws.com/ekstep-public-dev/content-editor/scripts/script.min.js',
            'plugins/**/editor/*.js',

            // 'plugins/org.ekstep.test-1.0/editor/*.js', // if you want to test your editor plugin only
            // 'plugins/org.ekstep.test-1.0/test/*.js',  // include test directory for your specific plugin
            // fixtures - include as required, below patterns cover the core plugins
            { pattern: 'plugins/**/*.json', watched: true, served: true, included: false },
            { pattern: 'plugins/**/*.md', watched: true, served: true, included: false },
            { pattern: 'plugins/**/*.css', watched: true, served: true, included: false },
            { pattern: 'plugins/**/*.html', watched: true, served: true, included: false },
            { pattern: 'app/preview/**', watched: true, served: true, included: false }
        ],


        // list of files to exclude
        exclude: ['plugins/coverage/**', 'plugins/**/renderer/**', 'plugins/karma.pluginconf.js'],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'plugins/**/!(lib)/!(*.spec).js': ['coverage']
        },
        proxies: {
            '/plugins/': '/base/plugins/'
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            "PhantomJS"
        ],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        coverageReporter: {
            reporters: [
                { type: 'html', dir: 'plugins/coverage/' },
                { type: 'text-summary' }
            ],
        }
    })
}
