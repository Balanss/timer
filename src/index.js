import React from 'react';
import ReactDOM from 'react-dom/client';
import App from  "./comp/App";
import Filter from "./comp/Filter";







const root = ReactDOM.createRoot(document.getElementById('home'));
root.render(
  <React.StrictMode>

<Filter />
<div className="app" >

 <App />

</div>

  </React.StrictMode>,document.getElementById("home")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
