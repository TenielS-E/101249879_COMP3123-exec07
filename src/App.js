import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyInfo from './MyInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <React.Fragment>
          <MyInfo welcome = "Welcome to Fullstack Development - I" 
          program = "ReactJS Programming Week09 Lab exercise" 
          id = "101249879" fullName = "Teniel Smith-Edwards" 
          school = "George Brown College, Toronto"/>
        </React.Fragment>
      </header>
    </div>
  );
}

export default App;
