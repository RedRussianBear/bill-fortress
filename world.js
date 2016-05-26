/* Overworld and terrain management */
var world = {};

world.STATE = {PASSIVE: 0, NORTH: 1, EAST: 2, SOUTH: 3, WEST: 4};

world.OFFSETX = 0;
world.OFFSETY = 0;
world.SPEED = 20;
world.BOXSIZE = 384;

world.CELL = {WALL: 0, FLOOR: 1};
world.TILE = {};

world.World = function World(engine) {
	this.engine = engine;
	
	this.state = World.PASSIVE;
	this.grid = [];
	this.cells = [];
	this.update = function(delta) {}
	
	this.render = function(context, offx, offy) { 
		for(var i = 0; i < this.cells.length; i++) {
			this.cells[i].render(context, offx, offy);
		}
	}
	
	this.loadLevel = function(dir) {
		var xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange = function() {
			var text = "";
			if (xhttp.readyState == 4 && xhttp.status == 200) { text = xhttp.responseText; }
			
			var current = [];
			this.grid.push(current);
			for(var i = 0; i < text.length; i++) {
				if(test.charAt(i) == "\n") {
					current = [];
					this.grid.push(current);				
				}
				else {
					switch(test.charAt(i)) {
						case 'X':
							current.push(world.CELL.WALL);
							break;
						case '_':
							current.push(world.CELL.FLOOR);
							break;
					}
				}
			}
			
			for(var i = 0; i < grid.length; i++) {
				for(var j = 0; j < grid[i].length; j++) {
					switch(grid[i][j]) {
						case world.CELL.FLOOR:
							this.cells.push(new world.Cell(j, i, world.TILE.FLOOR));
							break;
					}
				}
			}
		};
		
		xhttp.open("GET", dir, true);
		xhttp.send();
	}
	
}

world.Cell = function Cell(c, r, image) {
	this.image = image;
	
	this.row = r;
	this.col = c;
	
	/* Sprite Super Constructor */
	sprite.Sprite.call(this, c * world.BOXSIZE, r * BOXSIZE, world.BOXSIZE, world.BOXSIZE);
	
	this.render = function(context, offx, offy) { context.drawImage(this.image, this.transform.x + offx, this.transform.y + offy, this.width, this.height); }
} 
