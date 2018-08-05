import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

import  {store} from './store/appstore'

const Main = ()=>
    (<Provider store={store}>
        <App/>
    </Provider>);

const Footer =() =>
(
    <div class="ui fixed vertical footer segment">
     
    Geetha 2018. All Rights Reserved
      
     </div>
 );

ReactDOM.render(<Main  />, document.getElementById('root'));
ReactDOM.render(<Footer  />, document.getElementById('foot'));

