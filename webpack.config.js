const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { fileURLToPath } = require('url');
module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
    },
    devtool: 'eval-source-map',
    devServer: {
        watchfiles: ['./src/template.html']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ],
    module: {
        rules: [{
            test: /\.html$/i,
            loader: 'html-loader'
        }]
    }
}