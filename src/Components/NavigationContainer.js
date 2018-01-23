import React, { Component } from 'react';
import '../css/navigationContainer.css';
import Logo from '../images/logo.jpg';

import NavigationMobile from '../Components/NavigationMobile';
import NavigationDesktop from '../Components/NavigationDesktop';

class NavigationContainer extends Component {

  constructor() {
    super();

    this.state = {
      isMobileMenuOpen: true,
    }
  }

  render() {
    return (
      <header>
        {this.state.isMobileMenuOpen ? <NavigationMobile/> : <NavigationDesktop/>}
      </header>
    );
  }
}

export default NavigationContainer;
