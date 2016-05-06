import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import proxy from 'proxy-middleware'
import url from 'url'
import config from '../../webpack.config'

var app = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    quiet: true,
    noInfo: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
})

export const hotServer = () => {
    app.listen(config._hotPort, 'localhost', () => {
        console.log(`Hot reloading listening on port: ${config._hotPort}`)
    })
}

export const proxyHandler = proxy(url.parse(`http://localhost:${config._hotPort}${config.output.publicPath}`))
