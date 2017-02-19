var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('js'),
    entry: "./app",
    output: {
        path: path.resolve('build/js'),
        publicPath: '/public/assets/js',
        filename: "bundle.js"
    },
    devServer: {
        contentBase: 'public'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!autoprefixer-loader"
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!autoprefix-loader!sass-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js','.es6']
    }
}