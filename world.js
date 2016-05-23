/* Overworld and terrain management */
var world = {};

world.STATE = {PASSIVE: 0, NORTH: 1, EAST: 2, SOUTH: 3, WEST: 4};

world.OFFSETX = 0;
world.OFFSETY = 0;
world.SPEED = 20;
world.BOXSIZE = 384;

world.World = function World(engine) {
	this.engine = engine;
	this.transform = new sprite.Transform(World.OFFSETX, World.OFFSETY);
	
	this.state = World.PASSIVE;
	this.grid = [][];
	this.cells = [];
	
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
		for(var i = 0; i < cells.length; i++) {
			cells[i].render(context);
		}
	}
	
}

world.Cell = function Cell(world, x, y, image) {
	this.world = world;
	this.image = image;
	
	/* Sprite Super Constructor */
	sprite.Sprite.call(this, x, y, world.BOXSIZE, world.BOXSIZE);
	
	this.render = function(context) { context.drawImage(this.image, this.transform.x + this.world.transform.x, this.transform.y + this.world.transform.y, this.width, this.height); }
} 
