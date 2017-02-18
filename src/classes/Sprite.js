export class Sprite {
	constructor({
		xPos,
		yPos,
		width,
		height,
		speed,
	}) {

		this.xPos 	= (xPos)		? xPos 		: 0;
		this.yPos 	= (yPos)		? yPos 		: 0;
		this.width 	= (width)		? width 	: 0;
		this.height = (height)	? height 	: 0;
		this.speed 	= (speed)		? speed 	: 0;

	} // /constructor

	setPosition( xPos, yPos ) {
		this.xPos = xPos;
		this.yPos = yPos;
	}

	setSpeed( speed ) {
		this.speed = speed;
	}
}

export default Sprite;
