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
	this.cells = [];
	
	this.update = function(delta) {}
	
	this.render = function(context, offx, offy) { 
		context.drawImage(this.image, this.transform.x, this.transform.y); 
		for(var i = 0; i < cells.length; i++) {
			cells[i].render(context, offx, offy);
		}
	}
	
	this.loadLevel = function() {
		var c, r;
		grid = new Array(c);
		for(var i = 0; i < c; i++)
			grid[i] = new Array(r);
	}
	
}

world.Cell = function Cell(world, x, y, image) {
	this.world = world;
	this.image = image;
	
	/* Sprite Super Constructor */
	sprite.Sprite.call(this, x, y, world.BOXSIZE, world.BOXSIZE);
	
	this.render = function(context, offx, offy) { context.drawImage(this.image, this.transform.x + offx, this.transform.y + offy, this.width, this.height); }
} 
