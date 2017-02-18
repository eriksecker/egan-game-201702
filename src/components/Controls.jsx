import React, { Component } from 'react';
import { connect } from 'react-redux';
import keydown from 'react-keydown';

import { INTERVAL_RATE } from '../constants';

const ARROW_CODE_LEFT = 37;
const ARROW_CODE_UP = 38;
const ARROW_CODE_DOWN = 40;
const ARROW_CODE_RIGHT = 39;


import * as actions from '../reducers/hero';

export class Controls extends Component {
	constructor() {
		super();
		this.state = {
			intervalId: null,
		};
	}

	componentWillReceiveProps( { keydown } ) {
		const { hero, updateModel } = this.props;

    if ( keydown.event ) {
      // inspect the keydown event and decide what to do
			switch( keydown.event.which ) {
				case ARROW_CODE_LEFT:
					hero.moveLeft();
					updateModel( hero );
					break;
				case ARROW_CODE_UP:
					hero.moveUp();
					updateModel( hero );
					break;
				case ARROW_CODE_DOWN:
					hero.moveDown();
					updateModel( hero );
					break;
				case ARROW_CODE_RIGHT:
					hero.moveRight();
					updateModel( hero );
					break;
				default:
					break;
			}

    }
  }

	moveUp() {
		const { hero, updateModel } = this.props;

		clearInterval( this.state.intervalId );
		const intervalId = setInterval( () => {
			hero.moveUp();
			updateModel(hero);
		}, INTERVAL_RATE);
		this.setState({ intervalId });
	}

	moveDown() {
		const { hero, updateModel } = this.props;

		clearInterval( this.state.intervalId );
		const intervalId = setInterval( () => {
			hero.moveDown();
			updateModel(hero);
		}, INTERVAL_RATE);
		this.setState({ intervalId });
	}

	moveLeft() {
		const { hero, updateModel } = this.props;

		clearInterval( this.state.intervalId );
		const intervalId = setInterval( () => {
			hero.moveLeft();
			updateModel(hero);
		}, INTERVAL_RATE);
		this.setState({ intervalId });
	}

	moveRight() {
		const { hero, updateModel } = this.props;

		clearInterval( this.state.intervalId );
		const intervalId = setInterval( () => {
			hero.moveRight();
			updateModel(hero);
		}, INTERVAL_RATE);
		this.setState({ intervalId });
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
	}
}
Controls = keydown(Controls);
export default connect(mapStateToProps, actions)(Controls);
