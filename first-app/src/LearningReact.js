import React, { Component } from 'react';
import './App.css';
import ButtonState from './Button';

class LearningReact extends Component {
  render() {
    return (
       <div >
        <h1 class="ui header">Learning React</h1>
        <p className="starting-react">
        </p>
        <ButtonState />
        To get started edit <code> src/LearningReact.js </code>
       </div>

    );
  }
}

export default LearningReact;
