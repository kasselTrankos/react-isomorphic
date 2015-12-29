var path = require('path');
var Webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: ['./src/client.js'],
  output: {
    path: path.join(__dirname, '/build/public'),
    filename: '[name].js',
  },
  module:  {
		loaders: [
			{test: /\.js$/,
				loaders: ["babel?cacheDirectory&presets[]=es2015&presets[]=react&presets[]=stage-0"],
				exclude: /(node_modules|bower_components)/
			},/*{
        test: /\.scss$/,
        //loaders: ["style", "css", "sass"]
        loader: ExtractTextPlugin.extract("style", "css!sass"),
        include:/assets/
      },{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }*/
		]
	},
}
