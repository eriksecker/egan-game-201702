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
			xSpeed: 0,
			ySpeed: 0,
			continuous: false,
			completed: false,
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

	// SCALE FUNCTION
	scale( scaleValue ) {
		this.width = this.width * scaleValue;
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

	initAnimation( endX, endY, totalSteps, continuous=true ) {
		this.setAnimateRangeStartPos( this.xPos, this.yPos );
		this.setAnimateRangeEndPos( endX, endY );


		const xDistance = endX - this.xPos;
		const yDistance = endY - this.yPos;

		const targetDistance = Math.sqrt( Math.pow( Math.abs(xDistance), 2 ) + Math.pow( Math.abs(yDistance), 2) );

		if( ! totalSteps ) {
			totalSteps = targetDistance / this.speed;
		}

		const xSpeed = xDistance / totalSteps;
		const ySpeed = yDistance / totalSteps;


		this.animate.continuous = continuous;
		this.animate.completed = false;
		this.animate.totalSteps = totalSteps;
		this.animate.currentStep = 0;
		this.animate.xSpeed = xSpeed;
		this.animate.ySpeed = ySpeed;
	}

	stepAnimation() {
		const { animate } = this;

		if( animate.completed || animate.currentStep >= animate.totalSteps ) {
			return;
		}

		animate.currentStep += 1;

		this.xPos += animate.xSpeed;
		this.yPos += animate.ySpeed;

		if( animate.currentStep >= animate.totalSteps ) {
			this.xPos = animate.range.end.xPos;
			this.yPos = animate.range.end.yPos;
			animate.completed = true;

			if( animate.continuous ) {
				this.initAnimation(
					animate.range.start.xPos,
					animate.range.start.yPos,
					animate.totalSteps,
					animate.continuous,
				);
			}
		}
	}
}

export default Sprite;
