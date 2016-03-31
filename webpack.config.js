var path = require('path')
var webpack = require('webpack')
var isProduction = !!process.argv.find(x => x == '-p')

var entry = {
    app: [
        './index', 'webpack-hot-middleware/client'
    ],
    vendor: [
        'react',
        'react-dom',
        'redux',
        'redux-promise',
        'redux-thunk',
        'redux-logger',
        'babel-polyfill'
    ]
}

var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', minChunks: Infinity, filename: 'vendor.js'})
]

if (isProduction) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({mangle: true, compress: {warnings: false}}))
}

module.exports = {
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    entry,
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins,
    externals: {
        'jsdom': 'window',
        'react/lib/ExecutionEnvironment': true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.json$/,
                loaders: ['json'],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    }
}
