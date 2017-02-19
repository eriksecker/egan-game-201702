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
const HERO_LEG_SPEED = 10;

import * as actions from '../../reducers/hero';

export class Hero extends Component {
	componentWillMount() {
		const { hero, updateModel } = this.props;

		// INIT HERO WHOLE
		hero.setWidth(HERO_WIDTH);
		hero.setHeight(HERO_HEIGHT);
		hero.setPosition( HERO_INIT_X, HERO_INIT_Y )
		hero.setSpeed(HERO_SPEED);

		// INIT HERO BODY
		hero.setWidth(HERO_BODY_WIDTH);
		hero.setHeight(HERO_BODY_HEIGHT);
		hero.body.setPosition( HERO_BODY_X, HERO_BODY_Y );

		// INIT HERO LEFT LEG AND ANIMATION RANGES
		hero.leftLeg.setWidth( HERO_LEFT_LEG_WIDTH );
		hero.leftLeg.setHeight( HERO_LEFT_LEG_HEIGHT );
		hero.leftLeg.setPosition( HERO_LEFT_LEG_DOWN_X, HERO_LEFT_LEG_DOWN_Y );
		hero.leftLeg.setSpeed( HERO_LEG_SPEED );
		hero.leftLeg.setAnimateRangeStartPos( HERO_LEFT_LEG_DOWN_X, HERO_LEFT_LEG_DOWN_Y );
		hero.leftLeg.setAnimateRangeEndPos( HERO_LEFT_LEG_UP_X, HERO_LEFT_LEG_UP_Y );

		// INIT HERO RIGHT LEG AND ANIMATION RANGES
		hero.rightLeg.setWidth( HERO_RIGHT_LEG_WIDTH );
		hero.rightLeg.setHeight( HERO_RIGHT_LEG_HEIGHT );
		hero.rightLeg.setPosition( HERO_RIGHT_LEG_UP_X, HERO_RIGHT_LEG_UP_Y );
		hero.rightLeg.setSpeed( HERO_LEG_SPEED );
		hero.rightLeg.setAnimateRangeStartPos( HERO_RIGHT_LEG_UP_X, HERO_RIGHT_LEG_UP_Y );
		hero.rightLeg.setAnimateRangeEndPos( HERO_RIGHT_LEG_DOWN_X, HERO_RIGHT_LEG_DOWN_Y );

		updateModel(hero);

	}

	render() {
		const { hero } = this.props;
		console.log( hero );

		const heroStyles = {
			left: `${hero.xPos}px`,
			top: `${hero.yPos}px`,
			width: `${hero.width}px`,
			height: `${hero.height}px`,
		}

		const bodyStyles = {
			left: `${hero.body.xPos}px`,
			top: `${hero.body.yPos}px`,
		}

		const leftLegStyles = {
			left: `${hero.leftLeg.xPos}px`,
			top: `${hero.leftLeg.yPos}px`,
		}

		const rightLegStyles = {
			left: `${hero.rightLeg.xPos}px`,
			top: `${hero.rightLeg.yPos}px`,
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
