var webpack = require("webpack");
var config = require("./webpack.client.js");
///removes bootstrap, from config, Make dinamyc later
config.entry.pop();
var hostname = process.env.HOSTNAME || "localhost";

config.cache = true;
config.debug = true;
config.devtool = "eval-sourcemap";

config.entry.unshift(
	"webpack-dev-server/client?http://" + hostname + ":8080",
	"webpack/hot/only-dev-server"
);

config.output.publicPath = "http://" + hostname + ":8080/dist/";
config.output.hotUpdateMainFilename = "update/[hash]/update.json";
config.output.hotUpdateChunkFilename = "update/[hash]/[id].update.js";

config.plugins = [
	new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
	new webpack.HotModuleReplacementPlugin()
];
/*
config.module.postLoaders =  [
	{test: /\.js$/, loaders: ["react-hot"], exclude: /(node_modules|bower_components)/}
];
*/
config.devServer = {
	publicPath:  "http://" + hostname + ":8080/public/",
	contentBase: "./build",
	hot:         true,
	inline:      true,
	lazy:        false,
	quiet:       true,
	noInfo:      false,
	headers:     {"Access-Control-Allow-Origin": "*"},
	stats:       {colors: true},
	host:        hostname
};

module.exports = config;
