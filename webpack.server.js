var path = require('path');
var Webpack = require('webpack');
module.exports = {
  entry: ['./src/server.express.js'],
  output: {
    path: './build',
    filename: 'server.js',
    publicPath: '/',
    sourcePrefix: '  ',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  stats: {
    colors: true,
    reasons: true,
    hash: false,
    version: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: false,
    cachedAssets: false,
  },
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module:  {
		loaders: [
			{test: /\.js$/,
				loaders: ["babel?cacheDirectory&presets[]=es2015&presets[]=react&presets[]=stage-0"],
				exclude: /(node_modules|bower_components)/
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
      },{
        test: /\.scss$/,
        loaders: ["isomorphic-style-loader", "css", "sass"],
        include: /src/,
        //loader: ExtractTextPlugin.extract("style", "css!sass")
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }
		]
	}
}
