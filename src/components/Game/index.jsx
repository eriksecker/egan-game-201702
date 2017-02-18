import React, { Component } from 'react';

import Background from './Background';
import Hero from './Hero';

export class Game extends Component {
	render() {
		return (
			<div id="game">
				<Hero />
				<Background />
			</div>
		);
	}
}

export default Game;
