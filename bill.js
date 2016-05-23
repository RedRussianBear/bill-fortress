function Bill(engine, name, type) {
	
	/* Sprite super constructor */
	sprite.Sprite.call(this, Bill.XPOS, Bill.YPOS, Bill.WIDTH, Bill.HEIGHT);

	/* State */
	this.state = Bill.PASSIVE;
	
	this.render = function(context) {	}
	
	this.update = function() {
		
	}
}

Bill.PASSIVE = 0;
Bill.LEFT = 1;
Bill.UP = 2;
Bill.RIGHT = 3;
Bill.DOWN = 4;

Bill.WIDTH = 64;
Bill.HEIGHT = 96;

Bill.XPOS = 0;
Bill.YPOS = 0;