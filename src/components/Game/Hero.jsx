import React, { Component } from 'react';
import { connect } from 'react-redux';

const HERO_SPEED = 10;
const HERO_WIDTH = 150;
const HERO_HEIGHT = 113;
const HERO_INIT_X = 200;
const HERO_INIT_Y = 200;

import * as actions from '../../reducers/hero';

export class Hero extends Component {
	componentWillMount() {
		const { hero, updateModel } = this.props;

		hero.setPosition( HERO_INIT_X, HERO_INIT_Y )
		hero.setWidth(HERO_WIDTH);
		hero.setHeight(HERO_HEIGHT);
		hero.setSpeed(HERO_SPEED);
		updateModel(hero);

	}

	render() {
		const { hero } = this.props;
		// console.log( "x:", hero.xPos, ", y:", hero.yPos );

		const styles = {
			left: `${hero.xPos}px`,
			top: `${hero.yPos}px`,
			width: `${hero.width}px`,
			height: `${hero.height}px`,
		}

		return (
			<div className="hero" style={ styles }>
				<img src="images/dragon.png" />
			</div>
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
