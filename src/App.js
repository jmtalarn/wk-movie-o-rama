import React, { Component } from 'react';
import logo from './logo.svg';
import About from './components/About';
import PrivateRoute from './components/PrivateRoute';
import LogoutLink from './components/Logout'
import Home from './components/Home'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import './App.css';




// @TODO Check https://tylermcginnis.com/react-router-protected-routes-authentication/
class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
        <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><LogoutLink /></li>
              </ul>

              <hr />

              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/about" component={About} />
            </div>

          </div>
        </Router>
      </div>
    );
  }
}



export default App;

