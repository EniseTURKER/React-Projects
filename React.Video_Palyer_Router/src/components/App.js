import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Menu from './Menu';




class App extends React.Component {

  render() {
    return (
      <div className="card">
        <h1>Video Player</h1>
        <Menu/>
        
        
      </div>
    );
  }
}

export default App;