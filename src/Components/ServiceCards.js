import React, { Component } from 'react';
import '../css/serviceCards.css';

import img from '../svg/image.svg';
import shapes from '../svg/shapes.svg';
import tele from '../svg/phone-call.svg';
import idea from '../svg/idea.svg';
import smarthome from '../svg/smartbulb.svg';


class ServiceCards extends Component {

  render() {
    return (
      <div className="service-cards row">

        <div className="service-card col-12 col-lg-3">
          <div className="service-card-container">
            <div className="service-card-content">
              <img src={idea} alt="Lampbulb" className="img-fluid" />
              <h1>EL</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod felis non fringilla rhoncus. In consequat lorem eget tempor ultrices. Nunc et posuere libero. </p>
            </div>
          </div>
        </div>

        <div className="service-card col-12 col-lg-3">
          <div className="service-card-container">
            <div className="service-card-content">
              <img src={smarthome} alt="Lampbulb" className="img-fluid" />
              <h1>Smart Home</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod felis non fringilla rhoncus. In consequat lorem eget tempor ultrices. Nunc et posuere libero. </p>
            </div>
          </div>
        </div>

        <div className="service-card col-12 col-lg-3">
          <div className="service-card-container">
            <div className="service-card-content">
              <img src={tele} alt="Phone" className="img-fluid" />
              <h1>TELE</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod felis non fringilla rhoncus. In consequat lorem eget tempor ultrices. Nunc et posuere libero. </p>
            </div>
          </div>
        </div>

        <div className="service-card col-12 col-lg-3">
          <div className="service-card-container">
            <div className="service-card-content">
              <img src={shapes} alt="network" className="img-fluid" />
              <h1>NÄTVERK</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod felis non fringilla rhoncus. In consequat lorem eget tempor ultrices. Nunc et posuere libero. </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ServiceCards;
