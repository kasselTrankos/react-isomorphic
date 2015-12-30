import './Main.scss';
import React, { Component, PropTypes } from 'react';

import MainMenu from '../MainMenu'
import Accounts from './../../containers/Accounts'
import { Provider } from 'react-redux'
import configureStore from './../../stores/Accounts'

export default class Main extends React.Component{
  render(){
    const store = configureStore();
    return (
      <div className="row">
        <div className="col-xs-1">&nbsp;</div>
        <div className="col-xs-10">
          <MainMenu></MainMenu>
          <p>Main to todos ke lo oi es ffd re maingan</p>
          <p>hola a main alddl, no maquiolo,, tele vale tanto</p>
          <p>casi casi lo tento<span>vli</span></p>
          <p>Mi </p>
          <Provider store={store}>
            <Accounts />
          </Provider>
        </div>
        <div className="col-xs-1">&nbsp;</div>
      </div>
      )
  }
}
