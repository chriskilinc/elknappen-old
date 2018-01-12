import React, { Component } from 'react';
import '../css/navigation.css';

class Navigation extends Component {

  render() {
    return (
      <nav className="navigation">
        <div className="nav-wrapper">
          <div className="nav-container container-fluid row">
            <div className="nav-logo col-md-5 col-lg-4 col-12 container-fluid row">
              <div className="col-8">
                <h1>Elknappen</h1>
              </div>

              <div className="col-4">
                <div className="mobile-bars">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>

            </div>
            <div className="nav-menu col-md-7 col-lg-8 row">
              <div className="nav-menu-container">
                <a href="#">Hem</a>
                <a href="#">Tjänster</a>
                <a href="#">Projekt</a>
                <a href="#">Om</a>
                <a href="#">Kontakt</a>
              </div>

            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
