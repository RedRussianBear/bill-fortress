
function World(engine) {
	this.engine = engine;
	this.transform = new sprite.Transform(World.OFFSETX, World.OFFSETY);
	
	this.state = World.PASSIVE;
	
	this.update = function(delta) {
		switch(this.state) {
			case World.PASSIVE:
				break;
			case World.NORTH:
				this.transform.y += World.SPEED * (delta/this.engine._update.interval);
				break;
			case World.EAST:
				this.transform.x += World.SPEED * (delta/this.engine._update.interval);
				break;
			case World.SOUTH:
				this.transform.y -= World.SPEED * (delta/this.engine._update.interval);
				break;
			case World.WEST:
				this.transform.x -= World.SPEED * (delta/this.engine._update.interval);
				break;
		}
		
		
	}
	
	this.render = function(context) {
		context.drawImage(this.image, this.transform.x, this.transform.y);
	}
}

World.OFFSETX = 0;
World.OFFSETY = 0;

World.PASSIVE = 0;
World.NORTH = 1;
World.EAST = 2;
World.SOUTH = 3;
World.WEST = 4;

World.SPEED = 20;