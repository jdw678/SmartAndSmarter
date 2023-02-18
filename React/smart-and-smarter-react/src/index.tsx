import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <link rel="stylesheet" href="/load.php?lang=en&amp;modules=ext.visualEditor.desktopArticleTarget.noscript%7Cjquery.tablesorter.styles%7Cmediawiki.skinning.interface%7Cskins.scratchwikiskin2&amp;only=styles&amp;skin=scratchwikiskin2"/>
    <link rel="stylesheet" href="/load.php?lang=en&amp;modules=site.styles&amp;only=styles&amp;skin=scratchwikiskin2"/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
