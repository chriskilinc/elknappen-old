import React, { Component } from 'react';
import '../css/navigation.css';
import '../css/navigationMobile.css';
import Logo from '../images/logo.jpg';


class Navigation extends Component {

  constructor(props){
    super(props);
    this.state = {
      isMobileMenuOpen: false,
    }
    
  }

  toggleMenu = () =>
    this.setState({isMobileMenuOpen: !this.state.isMobileMenuOpen});

  render() {
    return (
      <nav className="navigation">
        <div className="nav-wrapper">
          <div className="nav-container container-fluid row">
            <div className="nav-logo col-md-5 col-lg-4 col-12 container-fluid row">
              <div className="col-8">
                <a href=""><img src={Logo} className="img-fluid" alt="Logo" /></a>
              </div>

              <div className="col-4">
                <div className="mobile-bars" onClick={this.toggleMenu}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>

            </div>
            
            <div className="nav-menu col-md-7 col-lg-8 row">
                <div className="nav-menu-container">
                  <a href="#">Hem</a>
                  <a href="#services">Tjänster</a>
                  <a href="#projects">Projekt</a>
                  <a href="#about">Om</a>
                  <a href="#contact">Kontakt</a>
                </div>
            </div>

            {this.state.isMobileMenuOpen ? 
            
            <div className="menu-mobile row">
              <div className="menu-mobile-container">
                <button onClick={this.toggleMenu}>X</button>
                <a href="#" onClick={this.toggleMenu}>Hem</a>
                <a href="#services" onClick={this.toggleMenu}>Tjänster</a>
                <a href="#projects" onClick={this.toggleMenu}>Projekt</a>
                <a href="#about" onClick={this.toggleMenu}>Om</a>
                <a href="#contact" onClick={this.toggleMenu}>Kontakt</a>
              </div>
            </div>

            : null}

          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
