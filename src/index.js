import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import Router from './routes';
import './index.css';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router />
  </Provider>,
  // </React.StrictMode>,
);
