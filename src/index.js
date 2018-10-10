import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
// import firebase from 'firebase';

// Routes
import AppRoutes from './routes';

// Assets
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <AppRoutes />
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();
