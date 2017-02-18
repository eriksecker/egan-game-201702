import React, { Component } from 'react';
import { connect } from 'react-redux';

const HERO_SPEED = 10;
const HERO_INIT_X = 200;
const HERO_INIT_Y = 200;

import * as actions from '../../reducers/hero';

export class Hero extends Component {
	componentWillMount() {
		const { hero, updateModel } = this.props;

		hero.setPosition( HERO_INIT_X, HERO_INIT_Y )
		hero.setSpeed(HERO_SPEED);
		updateModel(hero);

	}

	render() {
		const { hero } = this.props;

		console.log( hero );
		const styles = {
			left: `${hero.xPos}px`,
			top: `${hero.yPos}px`,
		}

		return (
			<div className="hero" style={ styles } />
		);
	}
}

function mapStateToProps(state) {
	return{
		hero: state.hero.model,
		heroData: state.hero.data,
	}
}

export default connect(mapStateToProps, actions)(Hero);
