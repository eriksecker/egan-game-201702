import React, { Component } from 'react';
import { connect } from 'react-redux';

import { INTERVAL_RATE } from '../../constants';

import * as actions from '../../reducers/hero';

import Background from './Background';
import Hero from './Hero';

export class Game extends Component {
	constructor() {
		super();
		this.state = {
			intervalId: null,
			targetX: null,
			targetY: null,
			xSpeed: 0,
			ySpeed: 0,
		};
	}

	updatePositionToClick( event ) {
	}

	moveToTarget() {
	}

	render() {
		return (
			<div id="game" onClick={ this.updatePositionToClick.bind(this) }>
				<Hero />
				<Background />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		background: state.background.model,
		hero: state.hero.model,
	}
}
export default connect(mapStateToProps, actions)(Game);
