
module.exports = {
    entry: './src/web/index.js',
    output: {
        path: __dirname,
        filename: 'dist/bundles/web.js'
    },
    module: {
        loaders: [
            {
                test : /\.jsx?/,
                loader : 'babel-loader'
            },
        ]
    },
    plugins: []
};
