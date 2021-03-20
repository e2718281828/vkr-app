import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Content/Login/Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from "react-router-dom";
import Reset from './components/Content/Login/Reset';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='/app/*' render={() => <App /> } />
      <Route path='/login' render={() => <Login/> } />
      <Route path='/reset' render={() => <Reset/> } />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
