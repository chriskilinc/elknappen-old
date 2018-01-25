import React, { Component } from 'react';
import '../css/contactRow.css';

import cellphone from '../svg/phone-call.svg';
import letter from '../svg/letter.svg';

class ContactRow extends Component {

  render() {
    return (
        <section id="contact" className="contactRow container-fluid row">

          <div className="col-12 col-md-4 contact-card">
            <div className="contact-card-container">
              <h1><img src={cellphone} alt="ring"/>Ring</h1>
              <p>073 - xx xx xx</p>
            </div>
          </div>

          <div className="col-12 col-md-4 contact-card card-middle">
            <div className="contact-card-container">
              <h1><img src={letter} alt="ring"/>Maila</h1>
              <p>example@email.com</p>
            </div>
          </div>

          <div className="col-12 col-md-4 contact-card">
            <div className="contact-card-container">
            <h1><img src={cellphone} alt="ring"/>Ring</h1>
              <p>073 - xx xx xx</p>
            </div>
          </div>

        </section>
    );
  }
}

export default ContactRow;
