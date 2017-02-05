var ExtractTextPlugin = require('extract-text-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var Extractcss = new ExtractTextPlugin('app.css');

var CopyAssets = new CopyWebpackPlugin([
    { from: 'app/ui', to: "ui" }
]);

var path = require("path");

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html'
});

module.exports = {
  entry: [
    './app/initialize.js'
  ],
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      "~": "src"
    },
    extensions: ["", ".js", ".jsx", "scss"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include:  __dirname + '/app',
        loader: ['babel-loader'],
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader!sass-loader",
        })
      },
      {
        test: /\.(png|jpg)$/, 
        loader: 'file-loader?name=assets/[name].[ext]'
      }
    ]
  },
  output: {
    filename: 'assets/index_bundle.js',
    path: __dirname + '/public/ui'
  },
  plugins: [HTMLWebpackPluginConfig, CopyAssets, Extractcss]
}
