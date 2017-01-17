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
    './app/index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include:  __dirname + '/app',
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
