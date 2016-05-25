function Bill(engine) {
	
	/* Sprite super constructor */
	sprite.Sprite.call(this, Bill.XPOS, Bill.YPOS, Bill.WIDTH, Bill.HEIGHT);

	/* State */
	this.state = Bill.PASSIVE;
	
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
		for(key in this.engine.input.keyboard) {
			switch(key) {
				case "W":
					this.state = Bill.UP;
					if(!(grid[Math.floor(this.transform.x/world.BOXSIZE)][Math.floor((this.transform.y - dist)/world.BOXSIZE)] != 0 || grid[Math.floor((this.transform.x + this.width)/world.BOXSIZE)][Math.floor((this.transform.y - dist)/world.BOXSIZE)]))
						this.transform.y -= dist;
					break;
				case "A":
					this.state = Bill.LEFT;
					if(!(grid[Math.floor((this.transform.x - dist)/world.BOXSIZE)][Math.floor((this.transform.y)/world.BOXSIZE)] != 0 || grid[Math.floor((this.transform.x - dist)/world.BOXSIZE)][Math.floor((this.transform.y + this.height)/world.BOXSIZE)]))
						this.transform.x -= dist;
					break;
				case "S":
					this.state = Bill.DOWN;
					if(!(grid[Math.floor(this.transform.x/world.BOXSIZE)][Math.floor((this.transform.y + this.height + dist)/world.BOXSIZE)] != 0 || grid[Math.floor((this.transform.x + this.width)/world.BOXSIZE)][Math.floor((this.transform.y + this.height + dist)/world.BOXSIZE)]))
						this.transform.y += dist;
					break;
				case "D":
					this.state = Bill.RIGHT;
					if(!(grid[Math.floor((this.transform.x + width + dist)/world.BOXSIZE)][Math.floor((this.transform.y)/world.BOXSIZE)] != 0 || grid[Math.floor((this.transform.x + width + dist)/world.BOXSIZE)][Math.floor((this.transform.y + this.height)/world.BOXSIZE)]))
						this.transform.x += dist;
					break;
			}
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