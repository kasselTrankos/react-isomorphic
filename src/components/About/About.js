import React, { Component, PropTypes } from 'react';
import MainMenu from '../MainMenu'
export default class About extends Component{
  render(){
    return (
      <div className="row">
        <div className="col-xs-1">&nbsp;</div>
        <div className="col-xs-10">
          <MainMenu></MainMenu>
          <p>Main to todos in Abpaosout</p>
        <div className="col-xs-1">&nbsp;</div>
        </div>
      </div>
    )
  }
}
