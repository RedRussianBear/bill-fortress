bill = {};

bill.ATTACKS_INIT = [
	{NAME: "Logic", EXEC: function(enemy, caster){enemy.health -= caster.power*20;}, COOLDOWN: 0, POWER: 1, INFO: "Logic your foe for 20 dmg"},
	{NAME: "Merit", EXEC: function(enemy, caster){caster.health += caster.power*20;}, COOLDOWN: 4, POWER: 3, INFO: "Recover 20 health by sheer merit"},
	{NAME: "Negative Ads", EXEC: function(enemy, caster){enemy.health -= caster.funds; caster.funds = 0;}, COOLDOWN: 10, INFO: "Expend your fund warchest to damage your adversary"}
];

bill.ATTACKS_EXTRA = {
	LOBBY: {NAME: "Call a Lobbyist", EXEC: function(enemy, caster){enemy.health -= caster.power*80;}, COOLDOWN: 6, POWER: 8, INFO: "Call in the special interest cavalry"},
	QUOTE: {NAME: "Quote Lincoln", EXEC: function(enemy, caster){caster.health = caster.maxhealth;}, COOLDOWN: 12, INFO: "Restore your resilience with a quote from honest abe"}
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
	this.acount = 0;
	this.power = 1;
	this.sprint = 360;
	
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
		
		/* Sprinting */
		if(this.sprint > 0 && this.engine.input.keyboard[input.KEY.SHIFT] == input.STATE.DOWN){
			dist *= 2;
			this.sprint -= 5;
		}
		else if(this.sprint < 360 && this.engine.input.keyboard[input.KEY.SHIFT] != input.STATE.DOWN){
			this.sprint++;
		}
		
		/* Movement */
		if(this.engine.input.keyboard[input.KEY.W] == input.STATE.DOWN) {
			this.moving = true;
			this.state = bill.DIRECTION.UP;
			if((grid[Math.floor((this.transform.y - dist)/world.BOXSIZE)][Math.floor(this.transform.x/world.BOXSIZE)].walkable && grid[Math.floor((this.transform.y - dist)/world.BOXSIZE)][Math.floor((this.transform.x + this.width)/world.BOXSIZE)].walkable))
				this.transform.y -= dist;
		}
		if(this.engine.input.keyboard[input.KEY.S] == input.STATE.DOWN) {
			this.moving = true;
			this.state = bill.DIRECTION.DOWN;
			if((grid[Math.floor((this.transform.y + this.height + dist)/world.BOXSIZE)][Math.floor(this.transform.x/world.BOXSIZE)].walkable && grid[Math.floor((this.transform.y + this.height + dist)/world.BOXSIZE)][Math.floor((this.transform.x + this.width)/world.BOXSIZE)].walkable))
				this.transform.y += dist;
		}
		if(this.engine.input.keyboard[input.KEY.A] == input.STATE.DOWN) {
			this.state = bill.DIRECTION.LEFT;
			this.moving = true;
			if((grid[Math.floor((this.transform.y)/world.BOXSIZE)][Math.floor((this.transform.x - dist)/world.BOXSIZE)].walkable && grid[Math.floor((this.transform.y + this.height)/world.BOXSIZE)][Math.floor((this.transform.x - dist)/world.BOXSIZE)].walkable))
				this.transform.x -= dist;
		}
		if(this.engine.input.keyboard[input.KEY.D] == input.STATE.DOWN) {
			this.moving = true;
			this.state = bill.DIRECTION.RIGHT;
			if((grid[Math.floor((this.transform.y)/world.BOXSIZE)][Math.floor((this.transform.x + this.width + dist)/world.BOXSIZE)].walkable && grid[Math.floor((this.transform.y + this.height)/world.BOXSIZE)][Math.floor((this.transform.x + this.width + dist)/world.BOXSIZE)].walkable))
				this.transform.x += dist;
		}
		
		if( this.endorsements >= this.engine.entities.world.endorsereq
		&& (grid[Math.floor((this.transform.y + this.height)/world.BOXSIZE)][Math.floor((this.transform.x + this.width)/world.BOXSIZE)] == world.CELL.EXIT
		|| grid[Math.floor((this.transform.y)/world.BOXSIZE)][Math.floor(this.transform.x/world.BOXSIZE)] == world.CELL.EXIT
		|| grid[Math.floor((this.transform.y)/world.BOXSIZE)][Math.floor((this.transform.x + this.width)/world.BOXSIZE)] == world.CELL.EXIT
		|| grid[Math.floor((this.transform.y + this.height)/world.BOXSIZE)][Math.floor(this.transform.x/world.BOXSIZE)] == world.CELL.EXIT)) {
			this.engine.nextLevel();
		}
	}
	
	this.amend = function(name, info, reward) {
		var pmen = this.engine.entities.gui.children.character;
		pmen.adopt(name, new gui.Text(this.engine, 310, 55 + 50*this.acount, name, {base: {font: "46px " + FONT, textAlign: "left", fillStyle: "black", textBaseline: "top"}}, 280, 44));
		pmen.children[name].tooltip = new gui.ToolTip(this.engine, info);
		reward(this);
		this.acount++;
	}

}