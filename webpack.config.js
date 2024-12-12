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
        watchFiles: ['./src/template.html', './src/assets/styles.css']
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
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }]
    }
}