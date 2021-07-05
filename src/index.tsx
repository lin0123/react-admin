import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from '@/router/history';
import App from '@/App';

// import reportWebVitals from './reportWebVitals';

// window.onerror = (...args) => {
//   console.log('error');
//   console.log(args);
//   return true;
// };

ReactDOM.render(
  // <React.StrictMode>
  //   {/* <Suspense fallback={<div>Loading...</div>}>
  //   </Suspense> */}
  //   <Router history={history}>
  //     <App />
  //   </Router>
  // </React.StrictMode>,
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('react-web-app'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
