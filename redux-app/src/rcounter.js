import React, { Component } from 'react';
import { connect } from 'react-redux';
import RSwitch  from './rswitch';
class ReduxCounter extends Component {
  constructor(props) {
    super(props)

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  }

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  }
  render() {
    return (
      <div className="ui red segment">
        <h2>Redux Counter</h2>
        <RSwitch/>
        <div className="ui buttons">
          <button className="ui button" onClick={this.decrement} >Decrement</button>
          <button className="ui positive button" onClick={this.increment}>Increment</button>
          <div className="ui label">
            <i className={this.props.counterIcon} ></i> {this.props.counter}
          </div>
        </div>
      </div>


    );
  }
}


function mapStateToProps(state) {
  return {
    counter: state.counter,
    counterIcon: state.counterIcon
    
  };
}

export default connect(mapStateToProps)(ReduxCounter); 