function Bill(engine) {
	
	/* Sprite super constructor */
	sprite.Sprite.call(this, Bill.XPOS, Bill.YPOS, Bill.WIDTH, Bill.HEIGHT);

	/* State and engine*/
	this.state = Bill.PASSIVE;
	this.engine = engine;
	
	this.render = function(context) {
		switch(this.state) {
			case Bill.PASSIVE:
				break;
			case Bill.UP:
				break;
			case Bill.LEFT:
				break;
			case Bill.DOWN:
				break;
			case Bill.RIGHT:
				break;
		}
		
		context.drawImage(this.img, this.engine.canvas.width/2 - this.width/2, this.engine.canvas.height/2 - this.height/2, this.width, this.height);
	}
	
	this.update = function(delta) {
		this.state = Bill.PASSIVE;
		var dist = Bill.SPEED * (delta/this.engine._update.interval);
		var grid = this.engine.entities.world.grid;
		
		if(this.engine.input.keyboard[input.KEY.W] == input.STATE.DOWN) {
			this.state = Bill.UP;
			if(!(grid[Math.floor(this.transform.x/world.BOXSIZE)][Math.floor((this.transform.y - dist)/world.BOXSIZE)] == world.CELL.WALL || grid[Math.floor((this.transform.x + this.width)/world.BOXSIZE)][Math.floor((this.transform.y - dist)/world.BOXSIZE)] == world.CELL.WALL))
				this.transform.y -= dist;
		}
		if(this.engine.input.keyboard[input.KEY.A] == input.STATE.DOWN) {
			this.state = Bill.LEFT;
			if(!(grid[Math.floor((this.transform.x - dist)/world.BOXSIZE)][Math.floor((this.transform.y)/world.BOXSIZE)] == world.CELL.WALL || grid[Math.floor((this.transform.x - dist)/world.BOXSIZE)][Math.floor((this.transform.y + this.height)/world.BOXSIZE)] == world.CELL.WALL))
				this.transform.x -= dist;
		}
		if(this.engine.input.keyboard[input.KEY.S] == input.STATE.DOWN) {
			this.state = Bill.DOWN;
			if(!(grid[Math.floor(this.transform.x/world.BOXSIZE)][Math.floor((this.transform.y + this.height + dist)/world.BOXSIZE)] == world.CELL.WALL || grid[Math.floor((this.transform.x + this.width)/world.BOXSIZE)][Math.floor((this.transform.y + this.height + dist)/world.BOXSIZE)] == world.CELL.WALL))
				this.transform.y += dist;
		}
		if(this.engine.input.keyboard[input.KEY.D] == input.STATE.DOWN) {
			this.state = Bill.RIGHT;
			if(!(grid[Math.floor((this.transform.x + this.width + dist)/world.BOXSIZE)][Math.floor((this.transform.y)/world.BOXSIZE)] == world.CELL.WALL || grid[Math.floor((this.transform.x + this.width + dist)/world.BOXSIZE)][Math.floor((this.transform.y + this.height)/world.BOXSIZE)] == world.CELL.WALL))
				this.transform.x += dist;
		}
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

Bill.SPEED = 5;