import React, { Component } from 'react';
import '../css/buttonNormal.css';
//    PURPOSE    //
//  Display a clickable button that will redirect the user to an url

//    DATA    //
//  this.props.content = Button Text
//  this.props.url = Url to navigate to

class ButtonNormal extends Component {
  
  handleOnClick = () => {
    this.navigateToUrl(this.props.url);
  }

  navigateToUrl = (url) => {
    console.log(url);
    window.location.replace(url);
  }

  render() {
    return (
      <button className="button-normal" onClick={this.handleOnClick}>
        {this.props.content}
      </button>
    );
  }
}

export default ButtonNormal;
