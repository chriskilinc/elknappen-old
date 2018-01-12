import React, { Component } from 'react';

import HeroCard from './HeroCard';

import '../css/hero.css';
import Background from '../images/bg2.jpg';

class Hero extends Component {
	render() {
		var sectionStyle = {
			backgroundImage: `url(${Background})`,

		}
		return (
			<section className="hero" style={sectionStyle}>
				<div className="hero-container">
					< HeroCard />
				</div>
			</section>
		);
	}
}

export default Hero;
