import {createStore} from 'redux';
const initialState = {
    counter: 0,
    counterIcon:"large green thumbs up outline icon",
    selectedValue :1
  };
function reducer(state =initialState,action) {
    // just gonna leave this blank for now
    // which is the same as `return undefined;`
    switch(action.type) {
        case 'INCREMENT':
          return {
            counter: state.counter +  state.selectedValue,
            counterIcon:"large green thumbs up outline icon",
            selectedValue:state.selectedValue
          };
        case 'DECREMENT':
          return {
            counter: state.counter - state.selectedValue,
            counterIcon:"large red thumbs down outline icon",
            selectedValue:state.selectedValue
          };
         case 'SELECTED_INCREMENT_FACTOR':
          return {
            counter:state.counter,
            counterIcon:state.counterIcon,
            selectedValue : parseInt(action.payload,10)
          };  
        default:
          return state;
      }
  }
export const store  = createStore(reducer);
