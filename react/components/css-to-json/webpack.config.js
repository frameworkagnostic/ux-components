var path = require("path");

module.exports = {
    entry: {
      index: './test/__mock__/app.mock.js',
    },
    output: {
      path: path.join(__dirname, './dist/bundles/'),
      filename: '[name].js',
      libraryTarget: 'this',
      library: '[name]',
      umdNamedDefine: true,
    },
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
};