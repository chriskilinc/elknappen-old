import React, { Component } from 'react';
import Logo from '../images/logo.jpg';
import '../css/navigationMobile.css';

class NavigationMobile extends Component {
  constructor(){
    super();
  }

  closeMobileMenu = () => {
    console.log(this.props.isOpen);
  }

  render() {
    return (
        <div className="menu-mobile row">
              <div className="menu-mobile-container">
                <button onClick={this.closeMobileMenu}>X</button>
                <a href="#">Hem</a>
                <a href="#services">Tjänster</a>
                <a href="#projects">Projekt</a>
                <a href="#about">Om</a>
                <a href="#contact">Kontakt</a>
              </div>
        </div>
    );
  }
}

export default NavigationMobile;
