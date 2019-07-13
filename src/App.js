import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import Web from './versions/Web';
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
            />
          )
        }
      </Router>
    ) : (
        <Register />
      )
  }
}

export default withMobileSize(App);
