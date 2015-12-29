export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

const increment =()=> {
  return {
    type: INCREMENT_COUNTER
  }
}

const decrement = ()=>{
  return {
    type: DECREMENT_COUNTER
  }
}

const incrementIfOdd=()=> {
  return (dispatch, getState) => {
    const { accounts } = getState()

    if (accounts % 2 === 0) {
      return
    }

    dispatch(increment())
  }
}

const incrementAsync =(delay = 1000)=> {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}
export {increment,decrement, incrementIfOdd, incrementAsync}
