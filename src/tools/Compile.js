import fs from "fs";
import path from "path";
import cp from 'child_process';
import webpack from 'webpack';
var webpackMiddleware = require('webpack-middleware');
import webpackHotMiddleware from 'webpack-hot-middleware';
import WebpackDevServer from 'webpack-dev-middleware';
function Compile(webpackConfig, options){
  /*
  const port = 8001;
  const host = '0.0.0.0'
  new WebpackDevServer(webpack(webpackConfig), {
    contentBase: '/',
    hot: true,
    debug: true
  }).listen(port, host, function (err, result) {
    if (err) {
      console.log(err);
    }
  });
  console.log('-------------------------');
  console.log('Local web server runs at http://' + host + ':' + port);
  console.log('-------------------------');*/
  if(!options) options = {};
  this.server;
  this.sockets = [];
  const compiler = webpack(webpackConfig);
  this.middleware = webpackMiddleware(compiler);
  this.killPort = function(port, callback){
    var child = cp.exec(`lsof -i tcp:${ port } | grep LISTEN | awk '{print $2}' | xargs kill -9 `, (error)=>{
      console.log('killedPort', port, error);
      if(typeof callback==='function') callback(error);
    });
  }
  compiler.plugin("done", function(err, stats){
    /*let _this = this;
    let fs = this.middleware.fileSystem;
    let file = fs.readFileSync(webpackConfig.output.path+'/'+webpackConfig.output.filename);

    let data = file.toString("utf8");
    //if(typeof server!='undefined')this.killPort(8001);
    eval(data);
*/
      webpackConfig.output.path='./build';
      const compiler = webpack(webpackConfig).run((err, stats)=>{
        console.log('DONE FILE!!', err);
        webpackConfig.output.path='/build';
      });


    /*else{
      var _server = http.createServer(server);
      reload(_server);
    }*/
    //no es reak ek update, esta hecho por el front no el back, mmm
    /*this.killPort((err)=>{
      if(!err)eval(data);
    });*/
  }.bind(this));

}

module.exports = Compile;
