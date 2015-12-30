import Compile from './tools/Compile';
import webpack from 'webpack';
import webpackConfig from './../webpack.server';
const compiler = webpack(webpackConfig);
webpackConfig.output.path='/build'

var compile = new Compile(webpack(webpackConfig),
  {path:'build', name: webpackConfig.output.filename})
