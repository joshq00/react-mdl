import webpackConfig from './webpack.config';

let browsers = [ 'PhantomJS' ];
let basePath = '';
let plugins = [
    require( 'karma-webpack' ),
    require( 'karma-tap' ),
    require( 'karma-phantomjs-launcher' )
];
let frameworks = [ 'tap' ];
let files = [
    './node_modules/phantomjs-polyfill/bind-polyfill.js',
    './node_modules/babel-core/browser-polyfill.js',
    './extra/material.js',
    {
        pattern: 'src/**/__tests__/*-test.js'
    }
];

let exclude = [];
let preprocessors = {
    'src/**/__tests__/*-test.js': [ 'webpack' ]
};
let webpackServer = {
    noInfo: true
};
let reporters = [ 'progress' ];
let port = 9876;
let colors = true;
let autoWatch = true;
let singleRun = false;

export default function( config ) {
    config.set( {
        browsers,
        basePath,
        plugins,
        frameworks,
        files,
        exclude,
        preprocessors,
        webpack: webpackConfig,
        webpackServer,
        reporters,
        port,
        colors,
        autoWatch,
        singleRun,
        logLevel: config.LOG_INFO
    } );
}

