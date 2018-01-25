import React, { Component } from 'react';
import '../css/footer.css';

import ButtonNormal from '../Components/ButtonNormal';

class Footer extends Component {

  render() {
    return (
        <footer id="contact">
          <div className="footer-container row">
            <div className="col-12 col-md-6">
              <h1>elknappen.se</h1>
              <p>142 64 Trångsund</p>
              <p>example@email.com</p>
              <p>073 - xxx xx xx</p>
              
              
            </div>
            <div className="col-12 col-md-6 footer-right ">
              <ButtonNormal content={"CONTACT"} url={"http://www.example.com"}/>
            </div>
            
          </div>
          
        </footer>
    );
  }
}

export default Footer;
