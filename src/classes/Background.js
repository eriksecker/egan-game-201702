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

		moveLeft() {
			super.moveLeft();

			if( this.patternRepeatWidth ) {

				if( Math.abs(this.xPos) > this.patternRepeatWidth ) {
					this.xPos = 0;
				}
			}
		}
}

export default Background;
