import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './template/App';
import Construction from './construction';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';

ReactDOM.render(
  <Router>
    {/* <Construction/> */}
    <App/>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
