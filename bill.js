function Bill(engine, name, type) {
	
	/* Sprite super constructor */
	sprite.Sprite.call(this, Bill.XPOS, Bill.YPOS, Bill.WIDTH, Bill.HEIGHT);

	/* State */
	this.state = Bill.PASSIVE;
	
	this.render = function(context) {	}
	
	this.update = function(delta) {
		this.state = Bill.PASSIVE;
		var dist = Bill.SPEED * (delta/this.engine._update.interval);
		for(key in this.engine.input.keyboard) {
			switch(key) {
				case "W":
					this.state = Bill.UP;
					if(this.canMove(Bill.UP, dist))
						this.transform.y -= dist;
					break;
				case "A":
					this.state = Bill.LEFT;
					if(this.canMove(Bill.LEFT, dist))
						this.transform.x -= dist;
					break;
				case "S":
					this.state = Bill.DOWN;
					if(this.canMove(Bill.DOWN, dist))
						this.transform.y += dist;
					break;
				case "D":
					this.state = Bill.RIGHT;
					if(this.canMove(Bill.RIGHT, dist))
						this.transform.x += dist;
					break;
			}
		}
	}
	
	this.canMove = function(direction, dist) {
		var grid = this.engine.getWorld().grid;
		
		switch(direction){
			case Bill.UP:
				if(grid[Math.floor(this.transform.x/world.BOXSIZE)][Math.floor((this.transform.y - dist)/world.BOXSIZE)] != 0 || grid[Math.floor((this.transform.x + this.width)/world.BOXSIZE)][Math.floor((this.transform.y - dist)/world.BOXSIZE)])
					return false;
				break;
			case Bill.DOWN:
				if(grid[Math.floor(this.transform.x/world.BOXSIZE)][Math.floor((this.transform.y + dist)/world.BOXSIZE)] != 0 || grid[Math.floor((this.transform.x + this.width)/world.BOXSIZE)][Math.floor((this.transform.y + dist)/world.BOXSIZE)])
					return false;
				break;
			case Bill.EAST:
				if(grid[Math.floor((this.transform.x - dist)/world.BOXSIZE)][Math.floor((this.transform.y)/world.BOXSIZE)] != 0 || grid[Math.floor((this.transform.x - dist)/world.BOXSIZE)][Math.floor((this.transform.y + this.height)/world.BOXSIZE)])
					return false;
				break;
			case Bill.WEST:
				if(grid[Math.floor((this.transform.x + dist)/world.BOXSIZE)][Math.floor((this.transform.y)/world.BOXSIZE)] != 0 || grid[Math.floor((this.transform.x + dist)/world.BOXSIZE)][Math.floor((this.transform.y + this.height)/world.BOXSIZE)])
					return false;
				break;
		}
		
		return true;
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