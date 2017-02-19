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

		this.animate = {
			range: {},
			totalSteps: 0,
			currentStep: 0,
			continuous: false,
		}

	} // /constructor

	setPosition( xPos, yPos ) {
		this.xPos = xPos;
		this.yPos = yPos;
	}

	setWidth( width ) {
		this.width = width;
	}

	setHeight( height ) {
		this.height = height;
	}

	setSpeed( speed ) {
		this.speed = speed;
	}

	// MOVE FUNCTIONS
	moveRight() {
		const newX = this.xPos + this.speed
		this.xPos = newX;
	}

	moveLeft() {
		const newX = this.xPos - this.speed;
		this.xPos = newX;
	}

	moveUp() {
		const newY = this.yPos - this.speed;
		this.yPos = newY;
	}

	moveDown() {
		const newY = this.yPos + this.speed;
		this.yPos = newY;
	}

	// ANIMATE FUNCTIONS
	setAnimateRangeStartPos( x, y ) {
		this.animate.range.start = {
			xPos: x,
			yPos: y,
		};
	}

	setAnimateRangeEndPos( x, y ) {
		this.animate.range.end = {
			xPos: x,
			yPos: y,
		};
	}
}

export default Sprite;
