
import {createStore} from 'redux';
const initialState = {
    counter: 0
  };
  
function reducer(state =initialState,action) {
    // just gonna leave this blank for now
    // which is the same as `return undefined;`
    switch(action.type) {
        case 'INCREMENT':
          return {
            counter: state.counter + 1
          };
        case 'DECREMENT':
          return {
            counter: state.counter - 1
          };
        default:
          return state;
      }
  }

export const store  = createStore(reducer);

 