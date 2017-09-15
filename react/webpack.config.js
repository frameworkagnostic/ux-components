const autoprefixer = require('autoprefixer');

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
            test: /\.css$/,
            use: [
              // require.resolve('style-loader'),
              // {
              //   loader: require.resolve('css-loader'),
              //   options: {
              //     importLoaders: 1,
              //   },
              // },
              require.resolve('./components/css-json/src'),

              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
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
    plugins: []
};
