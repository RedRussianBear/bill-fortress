function Bill(engine) {
	
	/* Sprite super constructor */
	sprite.Sprite.call(this, Bill.XPOS, Bill.YPOS, Bill.WIDTH, Bill.HEIGHT);

	/* State and engine*/
	this.state = Bill.DIRECTION.RIGHT;
	this.engine = engine;
	this.images = [];
	this.moving = false;
	
	/* Stats */
	this.maxhealth = 100;
	this.health = 100;
	this.endorsements = 0;
	this.funds = 0;
	this.attacks = [];
	
	this.render = function(context, time) {
		context.drawImage(this.images[this.state][Math.floor(time/100)%(this.moving ? this.images[this.state].length : 1)], this.engine.canvas.width/2 - this.width/2, this.engine.canvas.height/2 - this.height/2, this.width, this.height);
	}
	
	this.update = function(delta) {
		var dist = Bill.SPEED * (delta/this.engine._update.interval);
		var grid = this.engine.entities.world.grid;
		this.moving = false;
		
		/* Movement */
		if(this.engine.input.keyboard[input.KEY.W] == input.STATE.DOWN) {
			this.moving = true;
			this.state = Bill.DIRECTION.UP;
			if(!(grid[Math.floor((this.transform.y - dist)/world.BOXSIZE)][Math.floor(this.transform.x/world.BOXSIZE)] == world.CELL.WALL || grid[Math.floor((this.transform.y - dist)/world.BOXSIZE)][Math.floor((this.transform.x + this.width)/world.BOXSIZE)] == world.CELL.WALL))
				this.transform.y -= dist;
		}
		if(this.engine.input.keyboard[input.KEY.A] == input.STATE.DOWN) {
			this.state = Bill.DIRECTION.LEFT;
			this.moving = true;
			if(!(grid[Math.floor((this.transform.y)/world.BOXSIZE)][Math.floor((this.transform.x - dist)/world.BOXSIZE)] == world.CELL.WALL || grid[Math.floor((this.transform.y + this.height)/world.BOXSIZE)][Math.floor((this.transform.x - dist)/world.BOXSIZE)] == world.CELL.WALL))
				this.transform.x -= dist;
		}
		if(this.engine.input.keyboard[input.KEY.S] == input.STATE.DOWN) {
			this.moving = true;
			this.state = Bill.DIRECTION.DOWN;
			if(!(grid[Math.floor((this.transform.y + this.height + dist)/world.BOXSIZE)][Math.floor(this.transform.x/world.BOXSIZE)] == world.CELL.WALL || grid[Math.floor((this.transform.y + this.height + dist)/world.BOXSIZE)][Math.floor((this.transform.x + this.width)/world.BOXSIZE)] == world.CELL.WALL))
				this.transform.y += dist;
		}
		if(this.engine.input.keyboard[input.KEY.D] == input.STATE.DOWN) {
			this.moving = true;
			this.state = Bill.DIRECTION.RIGHT;
			if(!(grid[Math.floor((this.transform.y)/world.BOXSIZE)][Math.floor((this.transform.x + this.width + dist)/world.BOXSIZE)] == world.CELL.WALL || grid[Math.floor((this.transform.y + this.height)/world.BOXSIZE)][Math.floor((this.transform.x + this.width + dist)/world.BOXSIZE)] == world.CELL.WALL))
				this.transform.x += dist;
		}
		
		/* Update HUD */
		var hud = this.engine.entities.gui.children.hud.children;
		hud.endorsements.val = this.endorsements;
		hud.funds.text = "Funds: $" + this.funds + "k";
	}

}

Bill.DIRECTION = {LEFT: 0, UP: 1, RIGHT: 2, DOWN: 3};

Bill.WIDTH = 64;
Bill.HEIGHT = 96;

Bill.XPOS = 0;
Bill.YPOS = 0;

Bill.SPEED = 5;