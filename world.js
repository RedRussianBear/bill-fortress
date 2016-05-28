/* Overworld and terrain management */
var world = {};

world.STATE = {PASSIVE: 0, NORTH: 1, EAST: 2, SOUTH: 3, WEST: 4};

world.OFFSETX = 0;
world.OFFSETY = 0;
world.SPEED = 20;
world.BOXSIZE = 128;

world.CELL = {WALL: 0, FLOOR: 1, PLAYER: 2};
world.TILE = {};

world.World = function World(engine) {
	this.engine = engine;
	
	this.state = World.PASSIVE;
	this.grid = [];
	this.cells = [];
	this.mobs = new mobs.Manager(this);
	
	this.update = function(delta) {
		this.mobs.update(delta);
	}
	
	this.render = function(context, offx, offy, time) { 
		this.mobs.render(context, offx, offy, time);
		
		for(var i = 0; i < this.cells.length; i++) {
			this.cells[i].render(context, offx, offy);
		}
	}
	
	this.loadLevel = function(level) {
		var text = level.map;
		var current = [];
		this.grid.push(current);
		
		/* Process map string into cell grid */
		for(var i = 0; i < text.length; i++) {
			if(text.charAt(i) == "\n") {
				current = [];
				this.grid.push(current);				
			}
			else {
				switch(text.charAt(i)) {
					case 'X':
						current.push(world.CELL.WALL);
						break;
					case '_':
						current.push(world.CELL.FLOOR);
						break;
					case 'P':
						current.push(world.CELL.PLAYER);
						break;
				}
			}
		}
		
		/* Create cell objects for all non-solid tiles */
		for(var i = 0; i < this.grid.length; i++) {
			for(var j = 0; j < this.grid[i].length; j++) {
				switch(this.grid[i][j]) {
					case world.CELL.PLAYER:
						this.playerx = j*world.BOXSIZE;
						this.playery = i*world.BOXSIZE;
					case world.CELL.FLOOR:
						this.cells.push(new world.Cell(j, i, world.TILE.FLOOR));
						break;
				}
			}
		}
		
		
	}
	
}

world.Cell = function Cell(c, r, image) {
	this.image = image;
	
	this.row = r;
	this.col = c;
	
	/* Sprite Super Constructor */
	sprite.Sprite.call(this, c * world.BOXSIZE, r * world. BOXSIZE, world.BOXSIZE, world.BOXSIZE);
	
	this.render = function(context, offx, offy) { 
		context.drawImage(this.image, (this.transform.x - offx), (this.transform.y - offy), this.width, this.height);
	}
} 
