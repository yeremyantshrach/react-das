import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Web from './versions/Web';

import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';

import Login from './pages/Login';
import Register from './pages/Register';

import withMobileSize from './withMobileSize';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  state = {
    isVisible: false
  };

  constructor(props) {
    super(props);
    this.handleOnToggle = this.handleOnToggle.bind(this);
  }

  handleOnToggle() {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    return localStorage.getItem('user') ? (
      <Router>
        {
          this.props.width >= 992 && (
            <Web
              handleOnToggle={this.handleOnToggle}
              isVisible={this.state.isVisible}
            >
              <Switch>
                <Route exact component={Home} path="/" />
                <Route component={About} path="/about" />
                <Route component={Contact} path="/contact" />
                <Redirect from="*" to="/" />
              </Switch>
            </Web>
          )
        }
        {
          this.props.width < 992 && this.props.width >= 515 && (
            <div>
              tablet version
            </div>
          )
        }
      </Router>
    ) : (
        <Router>
          <Web
            handleOnToggle={this.handleOnToggle}
            isVisible={this.state.isVisible}
          >
            <Switch>
              <Route exact component={Login} path="/login" />
              <Route component={Register} path="/register" />
              <Redirect from="*" to="/login" />
            </Switch>
          </Web>
        </Router>
      )
  }
}

export default withMobileSize(App);
