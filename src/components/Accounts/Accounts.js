import React, { Component, PropTypes } from 'react';

export default class Accounts extends Component{
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    accounts: PropTypes.number.isRequired
  };
  render(){
    const { increment, incrementIfOdd, incrementAsync, decrement, accounts } = this.props
    return (
      <p>
        Clicked: {accounts} times, fo
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    )
  };
}
