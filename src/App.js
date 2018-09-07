import React, { Component } from 'react';
import logo from './logo.svg';
import About from './components/About';
import PrivateRoute from './components/PrivateRoute';
import PrivateComponent from './components/PrivateComponent';
import Home from './components/Home';
import LoginProfilesContainer from './components/login/container/LoginProfilesContainer';
import AuthContainer from './components/auth/container/AuthContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
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
				<PrivateComponent><li><Link to="/profile">Profile</Link></li></PrivateComponent>
				<PrivateComponent><li><Link to="/movies">Movies</Link></li></PrivateComponent>
                <li><AuthContainer /></li>
              </ul>

              <hr />
			<Switch>
				<Route path="/login" component={LoginProfilesContainer} />
				<PrivateRoute path="/about" component={About} />
				<Route exact path="/" component={Home} />
			</Switch>
            </div>

          </div>
        </Router>
      </div>
    );
  }
}



export default App;

