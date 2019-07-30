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
import User from './pages/User';

import Login from './pages/Login';
import Register from './pages/Register';

import withMobileSize from './withMobileSize';
import PrivateRoute from './PrivateRoute';

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
    return (
      <Router>
        {
          this.props.width >= 992 && (
            <Web
              handleOnToggle={this.handleOnToggle}
              isVisible={this.state.isVisible}
            >
              <Switch>
                <Route component={Login} path="/login" />
                <Route component={Register} path="/register" />

                <PrivateRoute exact component={Home} path="/" />
                <PrivateRoute component={User} path="/user/:id" />
                <PrivateRoute component={About} path="/about" />
                <PrivateRoute component={Contact} path="/contact" />
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
    )
  }
}

export default withMobileSize(App);
