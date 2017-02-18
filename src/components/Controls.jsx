import React, { Component } from 'react';

export class Controls extends Component {
	render() {
		return (
			<div id="controls">
				<button type="button"><span className="fa fa-caret-left" /></button>
				<button type="button"><span className="fa fa-caret-up" /></button>
				<button type="button"><span className="fa fa-caret-down" /></button>
				<button type="button"><span className="fa fa-caret-right" /></button>
			</div>
		);
	}
}

export default Controls;
