/** Overworld and terrain management */
var world = {};

/** World directions. */
world.STATE = {PASSIVE: 0, NORTH: 1, EAST: 2, SOUTH: 3, WEST: 4};

/** World rendering properties. */
world.OFFSETX = 0;
world.OFFSETY = 0;
world.SPEED = 20;
world.BOXSIZE = 128;
world.LOOTSIZE = 64;

/** World tile types. */
world.CELL = {WALL: 0, FLOOR: 1, PLAYER: 2, EXIT: 3};
world.SPRITES = {};

/** World objects. */
world.World = function World(engine) {
    
    /* Track the engine. */
	this.engine = engine;
	
    /* World state and map. */
	this.state = World.PASSIVE;
	this.grid = [];
	this.cells = [];
	this.loot = [];
    
    /* World managers. */
    this.atmosphere = new atmosphere.Manager(this);
	this.mobs = new mobs.Manager(this.engine, this);
	
    /** Update the world. */
	this.update = function(delta) {
        
        /* Update the managers. */
		this.mobs.update(delta);
        this.atmosphere.update(delta);
		
		for(var i = 0; i < this.loot.length; i++) this.loot[i].update(delta, i);
        
    }
	
    /** Render the world. */
	this.render = function(context, offx, offy, time) { 
        
        /** Render cells. */
		for (var i = 0; i < this.cells.length; i++) this.cells[i].render(context, offx, offy);
        
        /** Render mobs. */
        this.mobs.render(context, offx, offy, time);
	
		for(var i = 0; i < this.loot.length; i++) this.loot[i].render(context, offx, offy);
    }
	
    /** Load a level. */
	this.load = function(level) {
		this.cells = [];
		this.grid = [];
		this.loot = [];
		this.atmosphere = new atmosphere.Manager(this);
		this.mobs = new mobs.Manager(this.engine, this);
        
        /* Load the text and grid. */
		var text = level.map;
		var current = [];
		
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
						this.cells.push(new world.Cell(this.engine, j, i, world.SPRITES.FLOOR, world.CELL.FLOOR));
						break;
					case world.CELL.EXIT:
						this.cells.push(new world.Cell(this.engine, j, i, world.SPRITES.EXIT, world.CELL.EXIT));
						break;
				}
			}
		}
		
		/* Create mobs. */
		var moblist = level.mobs;
		this.mobs.clear();
		for(var i = 0; i < moblist.length; i++) {
			var cur = moblist[i];
			this.mobs.adopt(new mobs.Politician(this.engine, cur.C*world.BOXSIZE, cur.R*world.BOXSIZE, cur.NAME, cur.PARTY, cur.RANK, cur.ONDEFEAT));
		}
        
        /* Create atmosphere. */
        var triggers = level.atmosphere;
        this.atmosphere.clear();
        for (var i = 0; i < triggers.length; i++) {
            var cur = triggers[i];
            if (cur.TYPE == "background") {
                this.atmosphere.add(
                    new atmosphere.BackgroundPlaylist(this.engine, cur.SOUNDS)
                );
            }
        }
		
		/* Create loot */
		var lootlist = level.loot;
		for(var i = 0; i < lootlist.length; i++) {
			this.loot.push(new world.Loot(this.engine, this, lootlist[i].C, lootlist[i].R, lootlist[i].REWARD, lootlist[i].NAME, lootlist[i].INFO));
		}
		
		/* Load endorsement requirement */
		this.endorsereq = level.endorsereq;
		
		level.map = null;
		level.mobs = null;
		level.atmosphere = null;
		level.loot = null;
		
	}
	
}

world.Cell = function Cell(engine, c, r, image, type) {
    this.canvas = engine.canvas;
	this.image = image;
	this.type = type;
	this.row = r;
	this.col = c;
	
	/* Sprite Super Constructor */
	sprite.Sprite.call(this, c * world.BOXSIZE, r * world. BOXSIZE, world.BOXSIZE, world.BOXSIZE);
	
	this.render = function(context, offx, offy) { 
		var offedx = this.transform.x - offx;
		var offedy = this.transform.y - offy;
		if(offedx + this.canvas.width < 0 || offedy > this.canvas.height || offedx > this.canvas.width || offedy + this.height < 0) return;
		context.drawImage(this.image, offedx, offedy, this.width, this.height);
	}
} 

world.Loot = function Loot(engine, parent, c, r, reward, name, info, image) {
	this.engine = engine;
	this.reward = reward;
	this.name = name;
	this.parent = parent;
	this.info = info;
	this.image = image || world.SPRITES.CHEST;
	
	/* Sprite Super Constructor */
	sprite.Sprite.call(this, c*world.BOXSIZE + world.BOXSIZE/2 - world.LOOTSIZE/2, r*world.BOXSIZE + world.BOXSIZE/2 - world.LOOTSIZE/2, world.LOOTSIZE, world.LOOTSIZE);
	
	this.update = function(delta, i) {
		if(geometry.inside(this.engine.player.transform.x, this.engine.player.transform.y, this.transform.x, this.transform.y, this.width, this.height)
		|| geometry.inside(this.engine.player.transform.x + this.engine.player.width, this.engine.player.transform.y, this.transform.x, this.transform.y, this.width, this.height)
		|| geometry.inside(this.engine.player.transform.x, this.engine.player.transform.y + this.engine.player.height, this.transform.x, this.transform.y, this.width, this.height)
		|| geometry.inside(this.engine.player.transform.x + this.engine.player.width, this.engine.player.transform.y + this.engine.player.height, this.transform.x, this.transform.y, this.width, this.height)) {
			this.engine.player.amend(this.name, this.info, this.reward);
			this.parent.loot.splice(i, 1);
		}
	}
	
	this.render = function(context, offx, offy) {
		var offedx = this.transform.x - offx;
		var offedy = this.transform.y - offy;
		if(offedx + this.width < 0 || offedy > this.engine.canvas.height || offedx > this.engine.canvas.width || offedy + this.height < 0) return;
		context.drawImage(this.image, offedx, offedy, this.width, this.height);
	}
}
