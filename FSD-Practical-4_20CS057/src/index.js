import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import App2 from './App2';
// import App3 from './App3';
// import App4_fetch from './App4_fetch';
// import App_prvState from './App_prvState';
// import CRUD from './Component_2/CRUD';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    {/* <App2 /> */}
    {/* <App3 /> */}
    {/* <App4_fetch /> */}
    {/* <App_prvState /> */}
    {/* <CRUD /> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
