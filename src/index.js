import "bootstrap/dist/css/bootstrap.min.css";
import "glightbox/dist/css/glightbox.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/sass/main.scss";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

