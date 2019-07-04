import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import SideBar from './components/SideBar';

import './App.css';

class App extends React.Component {
  state = {
    country: "Armenia"
  };

  constructor(props) {
    super(props);
    this.handleOnChangeCountry = this.handleOnChangeCountry.bind(this);
  }

  handleOnChangeCountry() {
    this.setState({country: "USA"})
  }

  render() {
    return (
        <>
          <Header/>
          <SideBar/>
          <Content/>
          <Footer/>
        </>
    );
  }
}

export default App;
