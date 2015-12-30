var path = require('path');
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
			},{
        test: /\.scss$/,
        loader: 'style!css!sass',
        include:/src/
      }
		]
	},
}
