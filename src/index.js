import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Content/Login/Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from "react-router-dom";
import Reset from './components/Content/Login/Reset';
import state from './State.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='/app/*' render={() => <App manager={state.manager}/> } />
      <Route path='/login' render={() => <Login/> } />
      <Route path='/reset' render={() => <Reset/> } />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
