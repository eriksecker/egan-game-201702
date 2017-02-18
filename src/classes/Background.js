import Sprite from './Sprite';

export class Background extends Sprite {
		constructor({
			patternRepeatWidth,
			...props,
		}) {
			super( props );

			this.patternRepeatWidth = patternRepeatWidth;
		}

		setPatternRepeatWidth( width ) {
			this.patternRepeatWidth = width;
		}

		moveBackgroundHorizontally() {
			let newX = this.xPos + this.speed;

			if( this.patternRepeatWidth ) {

				if( Math.abs(newX) > this.patternRepeatWidth ) {
					newX = 0;
				}
			}

			this.xPos = newX;
		}
}

export default Background;
