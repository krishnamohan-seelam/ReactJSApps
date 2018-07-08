import React, { Component } from 'react';
import './App.css';
import { BrowserRouter  , Switch, Route, Link } from "react-router-dom";
import GitHub from './GitHub'
import LearningReact from './LearningReact'
import Messages from './Messages'
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                <div>
                 <div class="ui pointing menu">
                  
                 <a class="active item"><Link to="/GitHub">GitHub</Link></a>
                 <a class="item"><Link to="/LearningReact">Learning React</Link></a>
                 <a class="item"><Link to="/Messages">Messages</Link></a>
                 </div>
                 <div class="ui horizontal divider"></div>

                 
                    <Switch>
                        <Route exact path='/GitHub' component={CGitHub} />
                        <Route exact path="/LearningReact" component={CLearningReact} />
                        <Route exact path="/Messages" component={CMessages} />
                    </Switch>
                    </div>
              </BrowserRouter>
             
        );
    }

}

const CGitHub = () => (
   < GitHub />
);

const CLearningReact = () => (
    < LearningReact />
);

const CMessages = () => (
    < Messages /> 
);
export default App;