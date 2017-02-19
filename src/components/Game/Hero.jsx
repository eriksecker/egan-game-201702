import React, { Component } from 'react';
import { connect } from 'react-redux';

const HERO_SPEED = 10;
const HERO_WIDTH = 720;
const HERO_HEIGHT = 546;
// const HERO_INIT_X = 200;
// const HERO_INIT_Y = 200;
const HERO_INIT_X = 20;
const HERO_INIT_Y = 20;

const HERO_BODY_WIDTH = 583;
const HERO_BODY_HEIGHT = 492;
const HERO_BODY_X = 136;
const HERO_BODY_Y = 0;
const HERO_LEFT_LEG_WIDTH = 197;
const HERO_LEFT_LEG_HEIGHT = 369;
const HERO_LEFT_LEG_DOWN_X = 0;
const HERO_LEFT_LEG_DOWN_Y = 141;
const HERO_LEFT_LEG_UP_X = 15;
const HERO_LEFT_LEG_UP_Y = 116;
const HERO_RIGHT_LEG_WIDTH = 217;
const HERO_RIGHT_LEG_HEIGHT = 332;
const HERO_RIGHT_LEG_DOWN_X = 427;
const HERO_RIGHT_LEG_DOWN_Y = 212;
const HERO_RIGHT_LEG_UP_X = 411;
const HERO_RIGHT_LEG_UP_Y = 193;


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

		const heroStyles = {
			left: `${hero.xPos}px`,
			top: `${hero.yPos}px`,
			width: `${HERO_WIDTH}px`,
			height: `${HERO_HEIGHT}px`,
		}

		const bodyStyles = {
			left: `${HERO_BODY_X}px`,
			top: `${HERO_BODY_Y}px`,
		}

		const leftLegStyles = {
			left: `${HERO_LEFT_LEG_DOWN_X}px`,
			top: `${HERO_LEFT_LEG_DOWN_Y}px`,
		}

		const rightLegStyles = {
			left: `${HERO_RIGHT_LEG_UP_X}px`,
			top: `${HERO_RIGHT_LEG_UP_Y}px`,
		}



		return (
			<div className="hero" style={ heroStyles }>
				<div className="wrapper">
					<div className="body" style={ bodyStyles }>
						<img src="images/dragon-body.png" />
					</div>
					<div className="left-leg" style={ leftLegStyles }>
						<img src="images/dragon-left-leg.png" />
					</div>
					<div className="right-leg" style={ rightLegStyles }>
						<img src="images/dragon-right-leg.png" />
					</div>
				</div>
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
