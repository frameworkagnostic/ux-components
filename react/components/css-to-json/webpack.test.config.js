const webpackConfig = require('./webpack.bundles.config');

module.exports = Object.assign({}, webpackConfig, {
  entry: {
    index: './test/__mock__/app.mock.js',
  },
});
