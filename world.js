/** Overworld and terrain management */
var world = {};

/** World directions. */
world.STATE = {PASSIVE: 0, NORTH: 1, EAST: 2, SOUTH: 3, WEST: 4};

/** World rendering properties. */
world.OFFSETX = 0;
world.OFFSETY = 0;
world.SPEED = 20;
world.BOXSIZE = 128;

/** World tile types. */
world.CELL = {WALL: 0, FLOOR: 1, PLAYER: 2, EXIT: 3};
world.TILE = {};

/** World objects. */
world.World = function World(engine) {
    
    /* Track the engine. */
	this.engine = engine;
	
    /* World state and map. */
	this.state = World.PASSIVE;
	this.grid = [];
	this.cells = [];
    
    /* World managers. */
    this.atmosphere = new atmosphere.Manager(this);
	this.mobs = new mobs.Manager(this);
	
    /** Update the world. */
	this.update = function(delta) {
        
        /* Update the managers. */
		this.mobs.update(delta);
        this.atmosphere.update(delta);
        
    }
	
    /** Render the world. */
	this.render = function(context, offx, offy, time) { 
        
        /** Render cells. */
		for (var i = 0; i < this.cells.length; i++) this.cells[i].render(context, offx, offy);
        
        /** Render mobs. */
        this.mobs.render(context, offx, offy, time);
	
    }
	
    /** Load a level. */
	this.load = function(level) {
		this.cells = [];
		this.grid = [];
        
        /* Load the text and grid. */
		var text = level.map;
		var current = [];
		this.grid.push(current);
		
		/* Process map string into cell grid */
		for (var i = 0; i < text.length; i++) {
            
            /* Add the row to the grid. */
			if (text.charAt(i) == "\n") {
				this.grid.push(current);				
				current = [];
			}
            
            /* Add tiles by character. */
			else {
                var c = text.charAt(i);
				switch(c){
					case "X":
						current.push(world.CELL.WALL);
						break;
					case "_":
						current.push(world.CELL.FLOOR);
						break;
					case "P":
						current.push(world.CELL.PLAYER);
						break;
					case "E":
						current.push(world.CELL.EXIT);
						break;
					default:
						current.push(world.CELL.WALL);
						break;
				}
			}
            
		}
		
		/* Create cell objects for all non-solid tiles. */
		for (var i = 0; i < this.grid.length; i++) {
			for (var j = 0; j < this.grid[i].length; j++) {
				switch(this.grid[i][j]) {
					case world.CELL.PLAYER:
						this.playerx = j*world.BOXSIZE;
						this.playery = i*world.BOXSIZE;
					case world.CELL.FLOOR:
						this.cells.push(new world.Cell(j, i, world.TILE.FLOOR, world.CELL.FLOOR));
						break;
					case world.CELL.EXIT:
						this.cells.push(new world.Cell(j, i, world.TILE.FLOOR, world.CELL.EXIT));
						break;
				}
			}
		}
		
		/* Create mobs. */
		var moblist = level.mobs;
		this.mobs.clear();
		for(var i = 0; i < moblist.length; i++) {
			var cur = moblist[i];
			this.mobs.adopt(new mobs.Politician(cur.X*world.BOXSIZE, cur.Y*world.BOXSIZE, cur.NAME, cur.PARTY, cur.RANK, cur.ONDEFEAT));
		}
        
        /* Create atmosphere. */
        var triggers = level.atmosphere;
        this.atmosphere.clear();
        for (var i = 0; i < triggers.length; i++) {
            var cur = triggers[i];
            if (cur.TYPE == "proximity") {
                this.atmosphere.add(
                    new atmosphere.ProximitySound(this.engine, cur.X*world.BOXSIZE, cur.Y*world.BOXSIZE, cur.R*world.BOXSIZE, this.engine.resources.$(cur.SOUND))
                );
            }
        }
		
		/* Load endorsement requirement */
		this.endorsereq = level.endorsereq;
		
	}
	
}

world.Cell = function Cell(c, r, image, type) {
    
	this.image = image;
	this.type = type;
	this.row = r;
	this.col = c;
	
	/* Sprite Super Constructor */
	sprite.Sprite.call(this, c * world.BOXSIZE, r * world. BOXSIZE, world.BOXSIZE, world.BOXSIZE);
	
	this.render = function(context, offx, offy) { 
		context.drawImage(this.image, (this.transform.x - offx), (this.transform.y - offy), this.width, this.height);
	}
} 

world.Loot = function Loot(c, r, reward, type, image) {
	
	
}
