import React, { Component } from 'react';
import './semantic-ui-css/semantic.css';
import Counter from './counter'
import ReduxCounter from './rcounter'
 
class App extends Component {
  render() {
    return (
      <div className="App">
      <br/>
      <div class="ui two column centered grid">
      <div class="row">
            <div class="column">
            <Counter/>
            </div>
       </div>
       <div class="row">
            <div class="column">
            <ReduxCounter/>
            </div>
       </div>
        </div>
      </div>
    );
  }
}

export default App;
