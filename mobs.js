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
	{NAME: "Strawman", EXEC: function(enemy, caster){enemy.health -= 5;}, COOLDOWN: 1, POWER: 1}
];

mobs.Politician = function Politician (x, y, name, party, rank, ondefeat) {
	
	sprite.Sprite.call(this, x, y, mobs.WIDTH, mobs.HEIGHT);
	
	this.direction = Math.floor(4 * Math.random());
	this.party = party;
	this.name = name;
	this.maxhealth = 100;
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
		context.drawImage(mobs.SPRITES[this.party][this.direction][Math.floor(time/100)%(this.moving ? mobs.SPRITES[this.party][this.direction].length : 1)], (this.transform.x - offx), (this.transform.y - offy), this.width, this.height);
	}
	
	this.update = function(delta) {
		var dist = mobs.SPEED * (delta/this.parent.level.engine._update.interval);
		var player = this.parent.level.engine.entities.player;
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
			this.parent.level.engine.initdebate(this);
		}
	}
}

mobs.Manager = function Manager(level) {
	this.level = level;
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