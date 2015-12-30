import fs from "fs";
import path from "path";
import cp from 'child_process';
var webpackMiddleware = require('webpack-middleware');
import webpackHotMiddleware from 'webpack-hot-middleware';
function Compile(compiler, options){
  if(!options) options = {};
  this.server;
  this.sockets = [];
  this.middleware = webpackMiddleware(compiler);
  this.killPort = function(callback, port=8001){
    var child = cp.exec(' lsof -wni tcp:'+port+' | awk \'NR>1{kill -9 $2}\'', (error, stdout, stderr)=>{
      if(callback) callback(error);
    });
  }
  compiler.plugin("done", function(err, stats){
    let _this = this;
    let data = this.middleware.fileSystem.data.build["server.js"].toString("utf8");
    if(typeof(server)=='undefined') eval(data);
    //no es reak ek update, esta hecho por el front no el back, mmm
    /*this.killPort((err)=>{
      if(!err)eval(data);
    });*/
  }.bind(this));

}

module.exports = Compile;
