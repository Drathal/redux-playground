const ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path')
var webpack = require('webpack')
var isProduction = !!process.argv.find(x => x == '-p')

var entry = {
    app: [
        './src/app/index',
        'webpack-hot-middleware/client?reload=true&noInfo=true'
    ],
    vendor: [
        'react',
        'react-dom',
        'redux',
        'redux-promise',
        'redux-thunk',
        'babel-polyfill',
        'webpack-hot-middleware/client?reload=true&noInfo=true'
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
    }
];

var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', minChunks: Infinity, filename: 'vendor.js'})
]

if (!isProduction) {
    plugins.push(new ExtractTextPlugin('app.css', {allChunks: true}))
    loaders.push({
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader?sourceMap!toolbox')
    });
}

if (isProduction) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({mangle: true, compress: {warnings: false}}))
    plugins.push(new ExtractTextPlugin('app.css', {allChunks: true}))
    loaders.push({
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?sourceMap!toolbox')
    })
}

module.exports = {
    toolbox: {theme: 'src/app/theme.scss'},
    resolve: {
        extensions: [
            '',
            '.js',
            '.scss',
            '.json'
        ]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
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
        loaders
    }
}
