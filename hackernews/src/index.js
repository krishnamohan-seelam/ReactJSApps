import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './Main';
import registerServiceWorker from './registerServiceWorker';
import './semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
);

registerServiceWorker();
if (module.hot) {
  module.hot.accept();
}
