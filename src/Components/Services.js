import React, { Component } from 'react';
import ServiceCards from './ServiceCards';
import '../css/services.css';

class Services extends Component {

  render() {
    return (
      <section id="services" className="col-12 services">
        <div className="contents">
          <h1>Våra Tjänster</h1>
          <div className="contents-container">
            <p>Vi erbjuder alla typer av elinstallationer i Stockholm av certifierad elektriker. Vår långa erfarenhet ger god kompetens samt service på hög nivå.</p>
            <p>Inget jobb är för litet.</p>

            < ServiceCards />

          </div>
        </div>
      </section>
    );
  }
}

export default Services;
