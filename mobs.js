mobs = {};

mobs.DIRECTION = {LEFT: 0, UP: 1, RIGHT: 2, DOWN: 3};
mobs.PARTY = {DEMOCRAT: 0, REPUBLICAN: 1, SANDERS: 2};
mobs.RANK = {CONGRESPERSON: 0, SENATOR: 1, SPEAKER: 2, COMCHAIR: 3};

mobs.WIDTH = 64;
mobs.HEIGHT = 96;

mobs.SPRITES = [];

mobs.Politician = function Politician (x, y, party, rank, ondefeat) {
	
	sprites.Sprite.call(this, x, y, mobs.WIDTH, mobs.HEIGHT);
	
	this.direction = Math.floor(4 * Math.random());
	this.party = party;
	this.moving = false;
	this.rank = rank || mob.RANK.CONGRESPERSON;
	
	this.render = function(context, offx, offy, time) {
		context.drawImage(mobs.SPRITES[this.party][this.direction][Math.floor(time/100)%(this.moving ? mobs.SPRITES[this.party][this.direction].length : 1)], (this.transform.x - offx), (this.transform.y - offy), this.width, this.height);
	}
	
	this.update = function(delta) {
		
	}
}

mobs.Manager = function Manager(level) {
	
	this.children = [];
	
	this.render = function(context, offx, offy, time) {
		for(var i = 0; i++; i < this.children.length)
			this.children[i].render(context, offx, offy, time);
	}
	
	this.update = function(delta) {
		for(var i = 0; i++; i < this.children.length)
			this.children[i].update(delta);
	}
	
	this.adopt = function(child) {
		this.children.push(child);
		child.parent = this;
	}
}