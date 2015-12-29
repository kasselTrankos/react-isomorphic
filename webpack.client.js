var path = require('path');
var Webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: ['./src/client.js', './assets/bootstrap.scss'],
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
      }*/,{
        test: /\.scss$/,
        //loaders: ["style", "css", "sass"],
        include: /assets/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      }, { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      },
		]
	},
  plugins: [
      new ExtractTextPlugin('bootstrap.css',{
        allChunks: true
      }),
      new Webpack.HotModuleReplacementPlugin()
  ],
}
