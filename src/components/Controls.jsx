import React, { Component } from 'react';
import { connect } from 'react-redux';

import { INTERVAL_RATE } from '../constants';

import * as actions from '../reducers/hero';

export class Controls extends Component {
	constructor() {
		super();
		this.state = {
			intervalId: null,
		};
	}

	moveUp() {
		const { hero, updateModel } = this.props;

		clearInterval( this.state.intervalId );

		const intervalId = setInterval( () => {
			hero.moveUp();
			updateModel(hero);
		}, INTERVAL_RATE);
		this.setState({intervalId: intervalId});

	}

	moveDown() {
		const { hero, updateModel } = this.props;

		clearInterval( this.state.intervalId );

		const intervalId = setInterval( () => {
			hero.moveDown();
			updateModel(hero);
		}, INTERVAL_RATE);
		this.setState({intervalId: intervalId});
	}

	moveLeft() {
		const { hero, updateModel } = this.props;

		clearInterval( this.state.intervalId );

		const intervalId = setInterval( () => {
			hero.moveLeft();
			updateModel(hero);
		}, INTERVAL_RATE);
		this.setState({intervalId: intervalId});

	}

	moveRight() {
		const { hero, updateModel } = this.props;

		clearInterval( this.state.intervalId );

		const intervalId = setInterval( () => {
			hero.moveRight();
			updateModel(hero);
		}, INTERVAL_RATE);
		this.setState({intervalId: intervalId});

	}

	stopMove() {
		clearInterval( this.state.intervalId );
	}

	render() {
		return (
			<div id="controls">
				<button
					type="button"
					onMouseDown={ this.moveLeft.bind(this) }
					onMouseUp={ this.stopMove.bind(this) }
				>
					<span className="fa fa-caret-left" />
				</button>

				<button
					type="button"
					onMouseDown={ this.moveUp.bind(this) }
					onMouseUp={ this.stopMove.bind(this) }
				>
					<span className="fa fa-caret-up" />
				</button>

				<button
					type="button"
					onMouseDown={ this.moveDown.bind(this) }
					onMouseUp={ this.stopMove.bind(this) }
				>
					<span className="fa fa-caret-down" />
				</button>

				<button
					type="button"
					onMouseDown={ this.moveRight.bind(this) }
					onMouseUp={ this.stopMove.bind(this) }
				>
					<span className="fa fa-caret-right" />
				</button>

			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		hero: state.hero.model,
		heroData: state.hero.data,
	}
}

export default connect(mapStateToProps, actions)(Controls);
