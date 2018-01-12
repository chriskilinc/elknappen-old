import React, { Component } from 'react';
import '../css/heroCard.css';
import ButtonNormal from './ButtonNormal';

class HeroCard extends Component {
  render() {
    return (

      <div className="hero-card col-12">
        <div className="hero-card-container">
          <h1>ELINSTALLATIONER</h1>
          <p>Av behörig Elektriker</p>
          < ButtonNormal content="Tjänster" url="/#services"/>
          < ButtonNormal content="Om Elknappen" url="/#about"/>
        </div>
      </div>

    );
  }
}

export default HeroCard;
