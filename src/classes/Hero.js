import Sprite from './Sprite';

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

		this.body = new Sprite(bodyProps);
		this.leftLeg = new Sprite(leftLegProps);
		this.rightLeg = new Sprite(rightLegProps);
	}
}

export default Hero;
