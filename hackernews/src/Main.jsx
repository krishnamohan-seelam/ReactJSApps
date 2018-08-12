import React, { Component } from 'react';
import './semantic-ui-css/semantic.css';
import {HEADER} from  './components/Constants';
import NewsAggregator from './components/NewsAggregator';
class MainApp extends Component
{

  render()
  {
    return ( <div>
            <HEADER/>
            <br></br>
            <NewsAggregator/>
            </div>
            );
  }

}
export default MainApp;
