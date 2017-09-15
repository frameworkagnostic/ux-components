const webpackConfig = require('./webpack.config');

module.exports = Object.assign({}, webpackConfig, {
    entry: './test/__resources__/index.js',
    devServer: {
        port: 17000,
        historyApiFallback: {
            index: 'test/__resources__/devServer.html'
        }
    }
})
