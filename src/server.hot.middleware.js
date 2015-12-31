import Compile from './tools/Compile';

import webpackConfig from './../webpack.server';

webpackConfig.output.path='/build'

var compile = new Compile(webpackConfig,
  {path:'build', name: webpackConfig.output.filename, noInfo:true})
