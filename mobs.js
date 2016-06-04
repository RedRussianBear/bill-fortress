var mobs = {};

mobs.DIRECTION = {LEFT: 0, UP: 1, RIGHT: 2, DOWN: 3};
mobs.PARTY = {DEMOCRAT: 0, REPUBLICAN: 1, SANDERS: 2};
mobs.RANK = {CONGRESPERSON: 0, SENATOR: 1, SPEAKER: 2, COMCHAIR: 3};

mobs.WIDTH = 64;
mobs.HEIGHT = 96;
mobs.SPEED = 4;

mobs.SPRITES = [];

mobs.ATTACKS = [];

mobs.ATTACKS[mobs.RANK.CONGRESPERSON] = [
	{NAME: "Strawman", EXEC: function(enemy, caster){enemy.health -= 5;}, COOLDOWN: 1, POWER: 1},
	{NAME: "False Rebuttal", EXEC: function(enemy, caster){enemy.health -= 10; caster.health += 20;}, COOLDOWN: 4, POWER: 5},
	{NAME: "Ad Hominem", EXEC: function(enemy, caster){enemy.health -= 20;}, COOLDOWN: 5, POWER: 4}
];

mobs.ATTACKS[mobs.RANK.SENATOR] = [
	{NAME: "Strawman", EXEC: function(enemy, caster){enemy.health -= 5;}, COOLDOWN: 1, POWER: 1},
	{NAME: "False Rebuttal", EXEC: function(enemy, caster){enemy.health -= 10; caster.health += 20;}, COOLDOWN: 4, POWER: 5},
	{NAME: "Ad Hominem", EXEC: function(enemy, caster){enemy.health -= 20;}, COOLDOWN: 5, POWER: 4},
	{NAME: "Filibuster", EXEC: function(enemy, caster){caster.health -= 20; enemy.health -= 80;}, COOLDOWN: 12, POWER: 10},
	{NAME: "\"Think of the Children!\"", EXEC: function(enemy, caster){enemy.health -= 40;}, COOLDOWN: 6, POWER: 8}
];

mobs.ATTACKS[mobs.RANK.SPEAKER] = [
	{NAME: "Strawman", EXEC: function(enemy, caster){enemy.health -= 5;}, COOLDOWN: 1, POWER: 1},
	{NAME: "False Rebuttal", EXEC: function(enemy, caster){enemy.health -= 10; caster.health += 20;}, COOLDOWN: 4, POWER: 5},
	{NAME: "Ad Hominem", EXEC: function(enemy, caster){enemy.health -= 20;}, COOLDOWN: 5, POWER: 4},
	{NAME: "Refusal to Debate", EXEC: function(enemy, caster){enemy.health -= 100;}, COOLDOWN: 5, POWER: 30},
	{NAME: "Refusal to Refer to Committee", EXEC: function(enemy, caster){enemy.health -= 300;}, COOLDOWN: 100, POWER: 100},
	{NAME: "Exploit Media Access", EXEC: function(enemy, caster) {caster.health += 80}, COOLDOWN: 8, POWER: 80}
];

mobs.ATTACKS[mobs.RANK.COMCHAIR] = [
	{NAME: "Strawman", EXEC: function(enemy, caster){enemy.health -= 5;}, COOLDOWN: 1, POWER: 1},
	{NAME: "False Rebuttal", EXEC: function(enemy, caster){enemy.health -= 10; caster.health += 20;}, COOLDOWN: 4, POWER: 5},
	{NAME: "Ad Hominem", EXEC: function(enemy, caster){enemy.health -= 20;}, COOLDOWN: 5, POWER: 4},
	{NAME: "Table Motion", EXEC: function(enemy, caster){enemy.health -= 95;}, COOLDOWN: 20, POWER: 20},
	{NAME: "Attach Controversial Rider", EXEC: function(enemy, caster){enemy.health -= 50; caster.health += 50;}, COOLDOWN: 10, POWER: 10}
];

mobs.health = [];

mobs.health[mobs.RANK.CONGRESPERSON] = 100;
mobs.health[mobs.RANK.SENATOR] = 300;
mobs.health[mobs.RANK.SPEAKER] = 350;
mobs.health[mobs.RANK.COMCHAIR] = 200;

mobs.Politician = function Politician (engine, x, y, name, party, rank, ondefeat) {
	
	sprite.Sprite.call(this, x, y, mobs.WIDTH, mobs.HEIGHT);
	
	this.direction = Math.floor(4 * Math.random());
	this.party = party;
	this.name = name;
	this.maxhealth = mobs.health[rank];
	this.engine = engine;
	this.health = 100;
	this.attacks = [];
	this.moving = false;
	this.rank = rank || mobs.RANK.CONGRESPERSON;
	this.ondefeat = ondefeat || function(player) {player.endorsements++; player.funds += 10;};
	
	var asource = mobs.ATTACKS[this.rank];
	for(var i = 0; i < asource.length; i++) {
		this.attacks.push(new debate.Attack(asource[i].NAME, asource[i].EXEC, asource[i].COOLDOWN, asource[i].POWER));
	}
	
	this.render = function(context, offx, offy, time) {
		var offedx = this.transform.x - offx;
		var offedy = this.transform.y - offy;
		if(offedx + this.width < 0 || offedy > this.engine.canvas.height || offedx > this.engine.canvas.width || offedy + this.height < 0) return;
		context.drawImage(mobs.SPRITES[this.party][this.direction][Math.floor(time/100)%(this.moving ? mobs.SPRITES[this.party][this.direction].length : 1)], offedx, offedy, this.width, this.height);
	}
	
	this.update = function(delta) {
		var dist = mobs.SPEED * (delta/this.engine._update.interval);
		var player = this.engine.entities.player;
		var grid = this.parent.level.grid;
		this.moving = false;
		
		/* Move towards player, if in range */
		if(geometry.Vector.distance(this.transform, player.transform) < world.BOXSIZE*3){
			if(player.transform.y + player.height < this.transform.y) {
				this.moving = true;
				this.direction = mobs.DIRECTION.UP;
				if(!(grid[Math.floor((this.transform.y - dist)/world.BOXSIZE)][Math.floor(this.transform.x/world.BOXSIZE)] == world.CELL.WALL || grid[Math.floor((this.transform.y - dist)/world.BOXSIZE)][Math.floor((this.transform.x + this.width)/world.BOXSIZE)] == world.CELL.WALL))
					this.transform.y -= dist;
			}
			if(player.transform.x + player.width < this.transform.x) {
				this.direction = mobs.DIRECTION.LEFT;
				this.moving = true;
				if(!(grid[Math.floor((this.transform.y)/world.BOXSIZE)][Math.floor((this.transform.x - dist)/world.BOXSIZE)] == world.CELL.WALL || grid[Math.floor((this.transform.y + this.height)/world.BOXSIZE)][Math.floor((this.transform.x - dist)/world.BOXSIZE)] == world.CELL.WALL))
					this.transform.x -= dist;
			}
			if(player.transform.y > this.transform.y + this.height) {
				this.moving = true;
				this.direction = mobs.DIRECTION.DOWN;
				if(!(grid[Math.floor((this.transform.y + this.height + dist)/world.BOXSIZE)][Math.floor(this.transform.x/world.BOXSIZE)] == world.CELL.WALL || grid[Math.floor((this.transform.y + this.height + dist)/world.BOXSIZE)][Math.floor((this.transform.x + this.width)/world.BOXSIZE)] == world.CELL.WALL))
					this.transform.y += dist;
			}
			if(player.transform.x > this.transform.x + this.width) {
				this.moving = true;
				this.direction = mobs.DIRECTION.RIGHT;
				if(!(grid[Math.floor((this.transform.y)/world.BOXSIZE)][Math.floor((this.transform.x + this.width + dist)/world.BOXSIZE)] == world.CELL.WALL || grid[Math.floor((this.transform.y + this.height)/world.BOXSIZE)][Math.floor((this.transform.x + this.width + dist)/world.BOXSIZE)] == world.CELL.WALL))
					this.transform.x += dist;
			}
		}
		
		if(geometry.Vector.distance(this.transform, player.transform) < world.BOXSIZE) {
			this.engine.initdebate(this);
		}
		
	}
}

mobs.Manager = function Manager(engine, level) {
	this.level = level;
	this.engine = engine;
	this.children = [];
	
	this.render = function(context, offx, offy, time) {
		for(var i = 0; i < this.children.length; i++)
			this.children[i].render(context, offx, offy, time);
	}
	
	this.update = function(delta) {
		for(var i = 0; i < this.children.length; i++)
			this.children[i].update(delta);
	}
	
	this.adopt = function(child) {
		this.children.push(child);
		child.parent = this;
	}
	
	this.clear = function() {
		this.children = [];
	}
}