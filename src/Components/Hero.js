import React, { Component } from 'react';

import '../css/hero.css';
import Background from'../images/bg2.jpg';

class Hero extends Component {
	render() {
		var sectionStyle={
			backgroundImage: `url(${Background})`,
			
		}
		return (
			<section className="hero" style={sectionStyle}>
				<div className="hero-container">
					<h1>Hero</h1>
				</div>
			</section>
		);
	}
}

export default Hero;
