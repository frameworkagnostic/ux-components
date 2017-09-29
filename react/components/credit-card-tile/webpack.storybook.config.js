
module.exports = {
    plugins: [],
    module: {
        loaders: [
            {
                test : /\.jsx?/,
                loader : 'babel-loader'
            },
            {
                test: /\.styl$/,
                loader: 'css-loader!stylus-loader'
            },
            {
                test:/\.css$/,
                loader: "style-loader!css-loader"
            },
            {     test: /\.json$/,
                loader: 'json-loader'
            },
            {
              test: /\.(png|jpg|svg)$/,
              use: {
                loader: 'url-loader',
              },
            },
        ]
    },
};
