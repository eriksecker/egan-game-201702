import Sprite from './Sprite';

export class HeroPart extends Sprite {
	constructor({
		...props,
	}) {
		super(props);
	}

	scale( scaleValue ) {
		super.scale( scaleValue );
		this.xPos = this.xPos * scaleValue;
		this.yPos = this.yPos * scaleValue;
	}
}

export default HeroPart;
