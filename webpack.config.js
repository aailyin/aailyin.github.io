const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build')
  },
  devtool: 'eval-source-map',
  module: {
        rules: [{
                test: /\.html$/,
                loader: 'html-loader',
            }, {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "resolve-url-loader"
                }, {
                    loader: "sass-loader",
                }]
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i, 
            loader: "file-loader?name=images/[name].[ext]"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'build')
    }
};