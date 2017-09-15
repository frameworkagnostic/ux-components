const webpackConfig = require('./src/web/webpack.config');

module.exports = Object.assign(    {
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        exclude: [/node_modules/],
        loader : 'babel-loader'
      },
    ]
  },
  plugins: []
  },{
    output: {
      path: __dirname,
      filename: 'test/__resources__/index.js'
    },
    entry: './test/__resources__/index.js',
    devServer: {
      port: 17000,
      historyApiFallback: {
        index: 'test/__resources__/devServer.html'
      }
    }
  }
)
