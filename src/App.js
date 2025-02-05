import React from 'react';
import Routes from "../src/routes";
import 'bootswatch/dist/darkly/bootstrap.css';
import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;