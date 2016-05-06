const ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path')
var webpack = require('webpack')
var isProduction = process.env.NODE_ENV === 'production'
var isDevelopment = !isProduction

console.log('Bundling Application for:', process.env.NODE_ENV)

var entry = {
    app: [
        './src/app/index'
    ],
    vendor: [
        'react',
        'react-dom',
        'redux',
        'redux-promise',
        'redux-thunk',
        'babel-polyfill'
    ]
}

var loaders = [
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
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'url-loader?limit=10000',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false&verbose=false'
        ]
    },
    {
        test: /\.(scss|css)$/,
        loader: isProduction ?
            ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!sass-loader?sourceMap') :
            'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!sass'
    }
];

var preLoaders = []

var plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 51200 }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', minChunks: Infinity, filename: 'vendor.js' }),
    new ExtractTextPlugin('app.css', { allChunks: true })
]

if (isDevelopment) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
    entry.app.push('webpack-dev-server/client?http://localhost:3001')
    entry.app.push('webpack/hot/only-dev-server')
    entry.app.push('react-hot-loader/patch')
    entry.vendor.push('webpack-dev-server/client?http://localhost:3001')
    entry.vendor.push('webpack/hot/only-dev-server')
    entry.vendor.push('react-hot-loader/patch')
}

if (isProduction) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ mangle: true, compress: { warnings: false } }))
}

module.exports = {
    debug: false,
    resolve: {
        extensions: [
            '',
            '.js',
            '.scss',
            '.json'
        ]
    },
    devtool: isProduction ? 'source-map' : 'eval',
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
    _hotPort: 3001,
    module: {
        preLoaders,
        loaders
    }
}
