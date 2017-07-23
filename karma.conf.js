var webpackConfig = require('./webpack.config.js')

module.exports = function(config) {
    config.set({
         //browser test we wont to run
         browsers: ['Chrome'],
         singleRun: true,
         frameworks: ['mocha'], // use mocha for testing
         files: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/foundation-sites/dist/foundation.min.js',
             'app/tests/**/*.test.jsx'
            ],// path to test we want to execute
         preprocessors:{  //things we want to do with our test objects
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
         },
        reporters: ['mocha'], //show witch test faild and witch passed
        client: { // to stop the test if it takes too loong to be tested
            mocha: {
                timeout: '5000' // milisicends, to faild after 5 second
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true // we tell it that we do not care about webpack server
        }
    });
};