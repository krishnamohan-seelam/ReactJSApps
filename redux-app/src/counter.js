import React, { Component } from 'react';

class Counter extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = {counter:0 ,
                      counterIcon:"large green thumbs up outline icon"};
        this.increment  = this.increment.bind(this);
        this.decrement  = this.decrement.bind(this);
    }
    increment = () => {
        this.setState({
          counter: this.state.counter + 1,
          counterIcon :"large green thumbs up outline icon"
        });
      }
    
      decrement = () => {
        this.setState({
          counter: this.state.counter - 1,
          counterIcon :"large red thumbs down outline icon"
        });
      }
    render()
    {
         return(
            <div class="ui red segment"> 
            <h2>counter</h2>

             <div class="ui buttons">
             <button class="ui button" onClick={this.decrement} >Decrement</button>
             
             <button class="ui positive button" onClick={this.increment}>Increment</button>
             <div class="ui label">
             <i class ={this.state.counterIcon}></i> {this.state.counter}  
             </div>
            </div>
             

            </div>
           
         );
    }
}

export default Counter ; 