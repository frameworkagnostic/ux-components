const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
      index: './test/__resources__/index.js',
      'app.mock': './test/__mock__/app.mock.js',
    },
    output: {
        path: __dirname,
        filename: './test/.cached/[name].js'
    },
    module: {
        rules: [
          {
              test : /\.jsx?/,
              use : 'babel-loader'
          },
          {
            test: /\.css$/,
            use: [
              require.resolve('./src'),
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9',
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
            ],
          },
        ]
    },
    plugins: [],
    devServer: {
        port: 17000,
        historyApiFallback: {
            index: 'test/__resources__/devServer.html'
        }
    }
};
