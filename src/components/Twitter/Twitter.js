import React, {Component} from "react"
import MainMenu from '../MainMenu'

export default class Twitter extends Component{
  render(){
    return (
      <div className="row">
        <div className="col-xs-1">&nbsp;</div>
        <div className="col-xs-10">
          <MainMenu></MainMenu>
          <p>Soy Twitter</p>
        </div>
        <div className="col-xs-1">&nbsp;</div>
      </div>
    );
  }
}
