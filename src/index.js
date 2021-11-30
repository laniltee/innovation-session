import React from 'react';
import * as ReactDOM from 'react-dom';

import AutoBatching from './AutoBatching';
import TransitionAPI from './TransitionAPI';

import reportWebVitals from './reportWebVitals';

// New Render API
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    {/*<AutoBatching />*/}
    <TransitionAPI />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
