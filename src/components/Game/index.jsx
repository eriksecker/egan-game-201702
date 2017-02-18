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
		const { hero, background } = this.props;
		const { offsetX, offsetY } = event.nativeEvent;

		clearInterval( this.state.intervalId );

		const targetX = (offsetX + background.xPos) - (hero.width/2);
		const targetY = (offsetY + background.yPos) - (hero.height/2);

		const xDistance = targetX - hero.xPos;
		const yDistance = targetY - hero.yPos;

		const targetDistance = Math.sqrt( Math.pow( Math.abs(xDistance), 2 ) + Math.pow( Math.abs(yDistance), 2) );
		const steps = targetDistance / hero.speed;

		const xSpeed = xDistance / steps;
		const ySpeed = yDistance / steps;

		this.setState({
			targetX,
			targetY,
			xSpeed,
			ySpeed,
		});

		const intervalId = setInterval( this.moveToTarget.bind(this), INTERVAL_RATE);
		this.setState({ intervalId});
	}

	moveToTarget() {
		const { hero, updateModel } = this.props;
		const {
			targetX,
			targetY,
			xSpeed,
			ySpeed,
		} = this.state;

		let newX = hero.xPos + xSpeed;
		let newY = hero.yPos + ySpeed;

		if( xSpeed > 0 ) {
			if( newX > targetX ) {
				newX = targetX;
			}
		}
		else {
			if( newX < targetX ) {
				newX = targetX;
			}
		}

		if( ySpeed > 0 ) {
			if( newY > targetY ) {
				newY = targetY;
			}
		}
		else {
			if( newY < targetY ) {
				newY = targetY;
			}
		}

		if( newX === targetX && newY === targetY ) {
			clearInterval( this.state.intervalId );
		}

		hero.setPosition( newX, newY );
		updateModel( hero );
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
