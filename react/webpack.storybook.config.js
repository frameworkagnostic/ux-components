const autoprefixer = require('autoprefixer');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const { sync } = require('glob');

const STORYBOOKS = []
.concat(sync('src/**/__doc__/*.stories.js'))
.concat(sync('components/**/__doc__/*.stories.js'));

STORYBOOKS.map(console.log);

fs.writeFileSync(path.join(__dirname, '.storybook/config.js'), `
  import { configure } from '@storybook/react';
  configure(function loadStories() {
    ${STORYBOOKS.map(function(value) {
      return `require('../${value}');`;
    }).join('\n\n')}

  }, module);
`);

module.exports = {
    module: {
        rules: [
          {
              test : /\.jsx?/,
              exclude: [
                path.resolve(__dirname, 'node_modules')
              ],
              use : 'babel-loader'
          },
          {
            ///^(.*\.(?!(json.css)$))?[^.]*.css$/
            test: /\.json.css$/,
            exclude: [
              path.resolve(__dirname, 'node_modules')
            ],
            use: [
              // require.resolve('style-loader'),
              // {
              //   loader: require.resolve('css-loader'),
              //   options: {
              //     importLoaders: 1,
              //   },
              // },
              require.resolve('@thinkeloquent/css-to-json/dist/webpack'),
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
    plugins: [
      new webpack.DefinePlugin({
        'STORYBOOKS': JSON.stringify(
          []
          .concat(sync('src/**/__doc__/*.stories.js'))
          .concat(sync('components/**/__doc__/*.stories.js'))
          .map(function(value) {
            return path.dirname(value);
          })
        ),
      })
    ]
};
