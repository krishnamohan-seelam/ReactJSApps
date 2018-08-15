import React, {Component} from 'react';
import './App.css';
import {BrowserRouter,   Switch, Route, Link} from "react-router-dom";

import GitHub from './GitHub'
import LearningReact from './LearningReact'
import Messages from './Messages'
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div class="ui pointing menu">

            <Link to="/GitHub" className="active item">GitHub</Link>
            <Link to="/LearningReact" className="item">Learning React</Link>
            <Link to="/Messages" className="item">Messages</Link>
          </div>
          <div class="ui horizontal divider"></div>

          <Switch>
            <Route exact path='/' component={GitHubComponent}/>
            <Route exact path='/GitHub' component={GitHubComponent}/>
            <Route exact path="/LearningReact" component={LearningReactComponent}/>
            <Route exact path="/Messages" component={MessagesComponent}/>
            <Route  component ={ErrorComponent}/>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }

}

const GitHubComponent = () => (< GitHub />);

const LearningReactComponent = () => (< LearningReact />);

const MessagesComponent = () => (< Messages />);
const ErrorComponent = (location) => (<div className = "ui medium inverted red segment">
Error!!! No Matched <code>{location.pathname}</code>
</div>);
export default App;
