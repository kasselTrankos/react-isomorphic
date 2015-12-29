import React, { Component, PropTypes } from 'react';
import MainMenu from '../MainMenu'
import Accounts from './../../containers/Accounts'
import { Provider } from 'react-redux'
import configureStore from './../../stores/Accounts'

export default class Main extends React.Component{
  render(){
    const store = configureStore();
    return (
      <div>
        <MainMenu></MainMenu>
        <p>Main to todos</p>
        <Provider store={store}>
          <Accounts />
        </Provider>
      </div>
      )
  }
}
