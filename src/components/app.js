import React, { Component } from 'react';

import Game from './Game';
import Controls from './Controls';

export default class App extends Component {
  render() {
    return (
			<div>
				<Game />
				<Controls />
			</div>
    );
  }
}
