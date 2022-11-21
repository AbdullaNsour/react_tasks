import React from 'react';
import ReactDOM from 'react-dom/client';


import App1 from './header';
import App2  from './contant';
import App3 from './footer';
import Prop1 from'./contant';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
  <React.StrictMode>
    <App1 />
    <Prop1 name="Abdulla"/>
    <App2 />
    <App3 />
  </React.StrictMode>
);
App1();



