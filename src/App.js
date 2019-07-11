import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import Web from './versions/Web';

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
    return (
      <Router>
        {this.props.width >= 992 && <Web handleOnToggle={this.handleOnToggle} isVisible={this.state.isVisible} />}
      </Router>
    );
  }
}

export default withMobileSize(App);
