import webpack from 'webpack';
var webpackMiddleware = require('webpack-middleware');
import webpackHotMiddleware from 'webpack-hot-middleware';
import WebpackDevServer from 'webpack-dev-middleware';
export default class Compile {
  constructor(webpackConfig, options){
    if(!options) options = {};
    const compiler = webpack(webpackConfig);
    const middleware = webpackMiddleware(compiler, options);
    compiler.plugin("done", (err, stats)=>{
        webpackConfig.output.path='./build';
        webpack(webpackConfig).run((err, stats)=>{
          webpackConfig.output.path='/build';
        });
    });
  }
}
