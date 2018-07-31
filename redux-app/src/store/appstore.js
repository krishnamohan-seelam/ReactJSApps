
import {createStore} from 'redux';
const initialState = {
    counter: 0,
    counterIcon:"large green thumbs up outline icon"
  };
  
function reducer(state =initialState,action) {
    // just gonna leave this blank for now
    // which is the same as `return undefined;`
    switch(action.type) {
        case 'INCREMENT':
          return {
            counter: state.counter + 1,
            counterIcon:"large green thumbs up outline icon"
          };
        case 'DECREMENT':
          return {
            counter: state.counter - 1,
            counterIcon:"large red thumbs down outline icon"
          };
        default:
          return state;
      }
  }

export const store  = createStore(reducer);

 