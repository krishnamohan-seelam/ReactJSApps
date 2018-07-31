import React, { Component } from 'react';
import {connect} from  'react-redux';

class ReduxCounter extends Component 
{
    constructor(props)
    {
        super(props)
        
        this.increment  = this.increment.bind(this);
        this.decrement  = this.decrement.bind(this);
    }
    increment = () => {
        this.props.dispatch({type:"INCREMENT"});
      }
    
      decrement = () => {
        this.props.dispatch({type:"DECREMENT"});
      }
    render()
    {
         return(
            <div class="ui red segment"> 
            <h2>Redux counter</h2>

             <div class="ui buttons">
             <button class="ui button" onClick={this.decrement} >Decrement</button>
             
             <button class="ui positive button" onClick={this.increment}>Increment</button>
             <div class="ui label">
             <i class = {this.props.counterIcon} ></i> {this.props.counter}  
             </div>
            </div>
             

            </div>
           
         );
    }
}


function mapStateToProps(state) {
  return {
    counter: state.counter,
    counterIcon:state.counterIcon
  };
}

export default connect(mapStateToProps)(ReduxCounter); 