import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Messages from './components/Messages';
import NotFound from './components/NotFound';


import {
  Route,
  Link,
  Routes,NavLink
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="menu">
          <ul>
            <li><NavLink className={({isActive})=>isActive?"aktive":null } to= "/">Home</NavLink></li>
            <li><Link to= "/about">About</Link></li>
            <li><Link to= "/messages">Messages</Link></li>
          </ul>
        </div>
        <div className='app-intro'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/messages/*" element={<Messages/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route></Route>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
