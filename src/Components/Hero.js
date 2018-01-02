import React, { Component } from 'react';

import '../css/hero.css';

class Hero extends Component {
	render() {
		return (
			<section className="hero">
				<div className="hero-container">
					<p className="title">{this.props.articleTitle}</p>
					<p className="content">Hero content</p>
					<p>id: {this.props.articleId}</p>
				</div>
			</section>
		);
	}
}

export default Hero;
