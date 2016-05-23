function Bill(engine, name, type) {
	
	/* Sprite super constructor */
	sprite.Sprite.call(this, engine.canvas.width/2 - Bill.WIDTH/2, engine.canvas.height/2 - Bill.HEIGHT/2);

	/* State */
	this.state = Bill.PASSIVE;
	
	this.render = function(context) {

	}
	
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