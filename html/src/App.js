import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function router() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={()=>{
          return "404 not fount！";
        }}/>
        <Route exact path="/app" component={App}/>
      </div>
    </Router>
  );
}

export default router;
