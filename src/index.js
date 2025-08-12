import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importa CSS e JS do Bootstrap (o bundle já inclui o Popper)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
