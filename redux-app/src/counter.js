import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      counterIcon: "large green thumbs up outline icon"
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
      counterIcon: "large green thumbs up outline icon"
    }))
  };

  decrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
      counterIcon: "large red thumbs down outline icon"
    }))
  };
  render() {
    return (
      <div className="ui red segment">
        <h2>counter</h2>

        <div className="ui buttons">
          <button className="ui button" onClick={this.decrement} >Decrement</button>

          <button className="ui positive button" onClick={this.increment}>Increment</button>
          <div className="ui label">
            <i className={this.state.counterIcon}></i> {this.state.counter}
          </div>
        </div>


      </div>

    );
  }
}

export default Counter; 