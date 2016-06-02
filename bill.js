bill = {};

bill.ATTACKS_INIT = [
	{NAME: "Logic", EXEC: function(enemy, caster){enemy.health -= 10;}, COOLDOWN: 0, POWER: 1, INFO: "Logic your foe for 5 dmg"},
	{NAME: "Merit", EXEC: function(enemy, caster){caster.health += 20;}, COOLDOWN: 4, POWER: 3, INFO: "Recover 20 health by sheer merit"},
	{NAME: "Holier Than Thou", EXEC: function(enemy, caster){enemy.health -= 15; caster.health += 15;}, COOLDOWN: 10, INFO: "Divert your opponent's base with ideological extremism"}
];

bill.ATTACKS_EXTRA = {
	
};

bill.DIRECTION = {LEFT: 0, UP: 1, RIGHT: 2, DOWN: 3};

bill.WIDTH = 64;
bill.HEIGHT = 96;

bill.XPOS = 0;
bill.YPOS = 0;

bill.SPEED = 5;

bill.Bill = function Bill(engine) {
	
	/* Sprite super constructor */
	sprite.Sprite.call(this, bill.XPOS, bill.YPOS, bill.WIDTH, bill.HEIGHT);

	/* State and engine*/
	this.state = bill.DIRECTION.RIGHT;
	this.engine = engine;
	this.images = [];
	this.moving = false;
	
	/* Stats */
	this.maxhealth = 100;
	this.health = 100;
	this.endorsements = 0;
	this.funds = 0;
	this.attacks = [];
	
	for(var i = 0; i < bill.ATTACKS_INIT.length; i++){
		var cur = bill.ATTACKS_INIT[i];
		this.attacks.push(new debate.Attack(cur.NAME, cur.EXEC, cur.COOLDOWN, cur.POWER, cur.INFO));
	}
	
	this.render = function(context, time) {
		context.drawImage(this.images[this.state][Math.floor(time/100)%(this.moving ? this.images[this.state].length : 1)], this.engine.canvas.width/2 - this.width/2, this.engine.canvas.height/2 - this.height/2, this.width, this.height);
	}
	
	this.update = function(delta) {
		var dist = bill.SPEED * (delta/this.engine._update.interval);
		var grid = this.engine.entities.world.grid;
		this.moving = false;
		
		/* Movement */
		if(this.engine.input.keyboard[input.KEY.W] == input.STATE.DOWN) {
			this.moving = true;
			this.state = bill.DIRECTION.UP;
			if(!(grid[Math.floor((this.transform.y - dist)/world.BOXSIZE)][Math.floor(this.transform.x/world.BOXSIZE)] == world.CELL.WALL || grid[Math.floor((this.transform.y - dist)/world.BOXSIZE)][Math.floor((this.transform.x + this.width)/world.BOXSIZE)] == world.CELL.WALL))
				this.transform.y -= dist;
		}
		if(this.engine.input.keyboard[input.KEY.A] == input.STATE.DOWN) {
			this.state = bill.DIRECTION.LEFT;
			this.moving = true;
			if(!(grid[Math.floor((this.transform.y)/world.BOXSIZE)][Math.floor((this.transform.x - dist)/world.BOXSIZE)] == world.CELL.WALL || grid[Math.floor((this.transform.y + this.height)/world.BOXSIZE)][Math.floor((this.transform.x - dist)/world.BOXSIZE)] == world.CELL.WALL))
				this.transform.x -= dist;
		}
		if(this.engine.input.keyboard[input.KEY.S] == input.STATE.DOWN) {
			this.moving = true;
			this.state = bill.DIRECTION.DOWN;
			if(!(grid[Math.floor((this.transform.y + this.height + dist)/world.BOXSIZE)][Math.floor(this.transform.x/world.BOXSIZE)] == world.CELL.WALL || grid[Math.floor((this.transform.y + this.height + dist)/world.BOXSIZE)][Math.floor((this.transform.x + this.width)/world.BOXSIZE)] == world.CELL.WALL))
				this.transform.y += dist;
		}
		if(this.engine.input.keyboard[input.KEY.D] == input.STATE.DOWN) {
			this.moving = true;
			this.state = bill.DIRECTION.RIGHT;
			if(!(grid[Math.floor((this.transform.y)/world.BOXSIZE)][Math.floor((this.transform.x + this.width + dist)/world.BOXSIZE)] == world.CELL.WALL || grid[Math.floor((this.transform.y + this.height)/world.BOXSIZE)][Math.floor((this.transform.x + this.width + dist)/world.BOXSIZE)] == world.CELL.WALL))
				this.transform.x += dist;
		}
		
		/* Update HUD */
		var hud = this.engine.entities.gui.children.hud.children;
		hud.endorsements.val = this.endorsements;
		hud.funds.text = "Funds: $" + this.funds + "k";
		
		if( this.endorsements >= this.engine.entities.world.endorsereq
		&& (grid[Math.floor((this.transform.y + this.height)/world.BOXSIZE)][Math.floor((this.transform.x + this.width)/world.BOXSIZE)] == world.CELL.EXIT
		|| grid[Math.floor((this.transform.y)/world.BOXSIZE)][Math.floor(this.transform.x/world.BOXSIZE)] == world.CELL.EXIT
		|| grid[Math.floor((this.transform.y)/world.BOXSIZE)][Math.floor((this.transform.x + this.width)/world.BOXSIZE)] == world.CELL.EXIT
		|| grid[Math.floor((this.transform.y + this.height)/world.BOXSIZE)][Math.floor(this.transform.x/world.BOXSIZE)] == world.CELL.EXIT)) {
			this.engine.nextLevel();
		}
	}

}