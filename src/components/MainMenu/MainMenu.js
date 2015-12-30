import React, { Component, PropTypes } from "react";
import {Link} from 'react-router';

const ACTIVE = {color :'red'};

export default class MainMenu extends Component{

  render(){
    return (
      <div className="row">
        <h1>React Isomorphic  ::: A clear mount of menu:: next Twitter</h1>
        <ol className="breadcrumb">
          <li><Link to="/" activeStyle={ACTIVE}>Home</Link></li>
          <li><Link to="/about" activeStyle={ACTIVE}>About</Link></li>
          <li><Link to="/twitter" activeStyle={ACTIVE}>Twitter</Link></li>
        </ol>
      </div>
    );
  }
}
