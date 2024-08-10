import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import Router from './routes';
import { createStandaloneToast } from '@chakra-ui/react';

import './index.css';

const { ToastContainer } = createStandaloneToast();

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router />
    <ToastContainer />
  </Provider>,
  // </React.StrictMode>,
);
