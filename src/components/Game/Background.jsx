import React, { Component } from 'react';
import { connect } from 'react-redux';

import { INTERVAL_RATE } from '../../constants';
const BACKGROUND_SPEED = 10;
const PATTERN_WIDTH = 186;

import * as actions from '../../reducers/background';

export class Background extends Component {
	constructor() {
		super();
		this.state = {
			intervalId: null,
		};
	}

	componentWillMount() {
		const { background, updateModel } = this.props;

		background.setSpeed(BACKGROUND_SPEED);
		background.setPatternRepeatWidth(PATTERN_WIDTH);
		updateModel(background);

		const intervalId = setInterval( this.backgroundMoveLeft.bind(this), INTERVAL_RATE);

		this.setState({intervalId: intervalId});

	};

	componentWillUnmount() {
		clearInterval( this.state.intervalId );
	}

	backgroundMoveLeft() {
	}

	render() {
		const { background } = this.props;

		const styles = {
			left: `${background.xPos}px`,
			top: `${background.yPos}px`,
		}
		return (
			<div className="background" style={ styles }></div>
		);
	}
}

function mapStateToProps(state) {
	return {
		background: state.background.model,
		backgroundData: state.background.data,
	}
}

export default connect(mapStateToProps, actions)(Background);
