var CopyWebpackPlugin = require('copy-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var CopyAssets = new CopyWebpackPlugin([
    { from: 'app/assets', to: "assets" }
])

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html'
});

module.exports = {
  entry: [
    './app/initialize.js'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include:  __dirname + '/app',
        loader: ['babel-loader'],
        query: {
	        presets: ['es2015', 'react']
	    }
      }
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/public'
  },
  plugins: [HTMLWebpackPluginConfig, CopyAssets]
}
