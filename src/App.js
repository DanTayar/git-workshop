import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div> HEllO its Dave </div>

        <h1> Dan is great </h1>


        <img src={logo} className="App-logo" alt="logo" />
        <p>the best man on earth is dave</p>
        <p>the best man on earth is Raphael</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> Dan is one of the best dev </p>
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

export default App;
