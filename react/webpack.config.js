
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'dist/bundles/web.js'
    },
    module: {
        rules: [
          {
              test : /\.jsx?/,
              use : 'babel-loader'
          },
          {
            test: /\.scss$/,
            use: [
              {
                  loader: "style-loader"
              }, {
                  loader: "css-loader"
              }, {
                  loader: "sass-loader"
              }
            ]
          }
        ]
    },
    plugins: []
};
