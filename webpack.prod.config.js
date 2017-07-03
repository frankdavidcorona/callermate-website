const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    favicon: './src/public/images/favicon.png',
    inject: 'body'
});

module.exports = {
    devtool: 'source-map',
    entry: ['whatwg-fetch', './src/index'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        historyApiFallback: true
    },
    plugins: [
        HtmlWebpackPluginConfig,
        // new FaviconsWebpackPlugin('./src/public/images/feeel_logo_alt.png'),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.(sass|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {
                test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]'
            },
            {test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
            {test: /\.(jpe?g|png|gif|svg)$/i, loaders: 'url-loader?hash=sha512&digest=hex&name=[hash].[ext]'}
        ]
    }
};
