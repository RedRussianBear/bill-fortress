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
world.CELL = {WALL: 0, FLOOR: 1, PLAYER: 2, EXIT: 3, SECRET: 4};
world.SPRITES = [];

/** World objects. */
world.World = function World(engine) {
    
    /* Track the engine. */
	this.engine = engine;
	
    /* World state and world.map. */
	this.state = World.PASSIVE;
	this.grid = [];
	this.loot = [];
    
    /* World managers. */
    this.atmosphere = new atmosphere.Manager(this);
	this.mobs = new mobs.Manager(this.engine, this);
	
    /** Update the world. */
	this.update = function(delta, offx, offy) {
        
		/* Update cells */
		var xmin = Math.max(0, Math.floor(offx/world.BOXSIZE));
		var ymin = Math.max(0, Math.floor(offy/world.BOXSIZE));
		var limx = Math.min(this.grid[0].length, Math.ceil((offx + this.engine.canvas.width)/world.BOXSIZE));
		var limy = Math.min(this.grid.length, Math.ceil((offy + this.engine.canvas.height)/world.BOXSIZE));
		
		for(var i = ymin; i < limy; i++){
			for(var j = xmin; j < limx; j++) {
				if(!this.grid[i][j].seen) this.grid[i][j].seen = true;
			}
		}
		
        /* Update the managers. */
		this.mobs.update(delta);
        this.atmosphere.update(delta);
		
		for(var i = 0; i < this.loot.length; i++) this.loot[i].update(delta, i);
        
    }
	
    /** Render the world. */
	this.render = function(context, offx, offy, time) { 
        
        /** Render cells. */
		var xmin = Math.max(0, Math.floor(offx/world.BOXSIZE));
		var ymin = Math.max(0, Math.floor(offy/world.BOXSIZE));
		var limx = Math.min(this.grid[0].length, Math.ceil((offx + this.engine.canvas.width)/world.BOXSIZE));
		var limy = Math.min(this.grid.length, Math.ceil((offy + this.engine.canvas.height)/world.BOXSIZE));
		
		for(var i = ymin; i < limy; i++){
			for(var j = xmin; j < limx; j++) {
				this.grid[i][j].render(context, offx, offy);
			}
		}
		
		
        /** Render mobs. */
        this.mobs.render(context, offx, offy, time);
	
		for(var i = 0; i < this.loot.length; i++) this.loot[i].render(context, offx, offy);
    }
	
    /** Load a level. */
	this.load = function(level) {
		this.grid = [];
		this.loot = [];
		this.atmosphere = new atmosphere.Manager(this);
		this.mobs = new mobs.Manager(this.engine, this);
        
		var tgrid = [];
		
        /* Load the text and grid. */
		var text = level.map;
		var current = [];
		
		/* Process world.map string into cell grid */
		for (var i = 0; i < text.length; i++) {
            
            /* Add the row to the grid. */
			if (text.charAt(i) == "\n") {
				tgrid.push(current);				
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
					case "S":
						current.push(world.CELL.SECRET);
						break;
				}
			}
            
		}
		
		/* Create cell objects for all non-solid tiles. */
		for (var i = 0; i < tgrid.length; i++) {
			var current = [];
			
			for (var j = 0; j < tgrid[i].length; j++) {
				if(tgrid[i][j] == world.CELL.PLAYER){
					tgrid[i][j] = world.CELL.FLOOR;
					this.playerx = j*world.BOXSIZE;
					this.playery = i*world.BOXSIZE;
				}
				
				current.push(new world.Cell(this.engine, j, i, world.SPRITES[tgrid[i][j]], tgrid[i][j]));
			}
			
			this.grid.push(current);
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
		
	}
	
}

world.Cell = function Cell(engine, c, r, image, type) {
    this.canvas = engine.canvas;
	this.image = image;
	this.type = type;
	this.walkable = false;
	this.seen = false;
	this.row = r;
	this.col = c;
	this.color = "black";
	
	if(this.type == world.CELL.FLOOR || this.type == world.CELL.SECRET || this.type == world.CELL.EXIT) {
		this.walkable = true;
	}
	
	if(this.type == world.CELL.FLOOR) {
		this.color = "lightgrey";
	}
	
	/* Sprite Super Constructor */
	sprite.Sprite.call(this, c * world.BOXSIZE, r * world. BOXSIZE, world.BOXSIZE, world.BOXSIZE);
	
	this.render = function(context, offx, offy) { 
		var offedx = this.transform.x - offx;
		var offedy = this.transform.y - offy;
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
		if(((this.transform.x + this.width > this.engine.player.transform.x && this.transform.x + this.width < this.engine.player.transform.x + this.engine.player.width) 
		|| (this.transform.x > this.engine.player.transform.x && this.transform.x < this.engine.player.transform.x + this.engine.player.width))
		&& ((this.transform.y + this.height > this.engine.player.transform.y && this.transform.y + this.height < this.engine.player.transform.y + this.engine.player.height) 
		|| (this.transform.y > this.engine.player.transform.y && this.transform.y < this.engine.player.transform.y + this.engine.player.height))) {
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

world.map = {};

world.map.WIDTH = 600;
world.map.HEIGHT = 500;
world.map.PADDING = 8;

world.map.CELLCOLORS = [];

world.Map = function(engine) {
	this.engine = engine;
	this.visible = false;
	
	sprite.Sprite.call(this, this.engine.canvas.width/2 - world.map.WIDTH/2, this.engine.canvas.height/2 - world.map.HEIGHT/2, world.map.WIDTH, world.map.HEIGHT);
	
	
	this.setWorld = function(aworld) {
		this.grid = aworld.grid;
		
		this.segsize = Math.min(Math.floor((this.width - world.map.PADDING)/this.grid[0].length), Math.floor((this.height - world.map.PADDING)/this.grid.length));
		this.offx = this.transform.x + this.width/2 - this.segsize * this.grid[0].length/2;
		this.offy = this.transform.y + this.height/2 - this.segsize * this.grid.length/2;

	}
	
	this.update = function(delta) {
		if(this.engine.input.keyboard[input.KEY.M] == input.STATE.PRESSED) this.visible = (this.visible == false);
	}
	
	this.render = function(context, ptrans) {
		if(!this.visible) return;
		
		context.fillStyle = "black";
		context.fillRect(this.transform.x, this.transform.y, this.width, this.height);
		
		var accx = -this.segsize;
		var accy = 0;
		
		for(var i = 0; i < this.grid.length; i++) {
			for(var j = 0; j < this.grid[i].length; j++) {
				accx += this.segsize;
				if(!this.grid[i][j].seen) continue;
				
				context.fillStyle = this.grid[i][j].color;
				context.fillRect(this.offx + accx, this.offy + accy, this.segsize, this.segsize);
				
			}
			accy += this.segsize;
			accx = -this.segsize;
		}
		
		context.fillStyle = "green";
		context.fillRect(this.offx + Math.floor(ptrans.x/world.BOXSIZE)*this.segsize, this.offy + Math.floor(ptrans.y/world.BOXSIZE)*this.segsize, this.segsize, this.segsize);
	}

}
