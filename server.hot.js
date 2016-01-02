require("babel-polyfill");

require("babel-core/register")({
	only: /src/,
	presets: ["es2015", "react", "stage-0", "stage-3"],
	//optional: ['runtime'],
	plugins: ["syntax-async-functions","transform-regenerator"]
});


global.__CLIENT__ = false;
global.__SERVER__ = true;

try {
	require("./src/server.hot.middleware");
}
catch (error) {
	console.error('ERROR: ',error.stack);
}
