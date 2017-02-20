import Sprite from './Sprite';
import HeroPart from './HeroPart';

export class Hero extends Sprite {
	constructor({
		body,
		leftLeg,
		rightLeg,
		...props,
	}) {
		super(props);

		const bodyProps = (body) ? body : {};
		const leftLegProps = (leftLeg) ? leftLeg : {};
		const rightLegProps = (rightLeg) ? rightLeg : {};

		this.body = new HeroPart(bodyProps);
		this.leftLeg = new HeroPart(leftLegProps);
		this.rightLeg = new HeroPart(rightLegProps);
	}

	// SCALE FUNCTION
	scale( scaleValue ) {
		super.scale( scaleValue );

		this.body.scale( scaleValue );
		this.leftLeg.scale( scaleValue );
		this.rightLeg.scale( scaleValue );
	}
}

export default Hero;
