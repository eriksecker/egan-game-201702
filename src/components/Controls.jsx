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
	}

	moveDown() {
	}

	moveLeft() {
	}

	moveRight() {
	}

	stopMove() {
	}

	render() {
		return (
			<div id="controls">
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
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		hero: state.hero.model,
	}
}

export default connect(mapStateToProps, actions)(Controls);
