var debate = {};

debate.Manager = function Manager(engine) {
	this.engine = engine;
	
	
	this.start = function(enemy) {
		this.amenu = this.engine.entities.gui.children.debate.children.bill.children.actions;
		this.enemy = enemy;
		this.turnnum = 0;
		
		/* Reset player attacks */
		var pat = this.engine.entities.player.attacks;
		for(var i = 0; i < pat.length; i++) {
			pat[i].available = true;
			pat[i].lastused = -1;
		}
		
		/* Reset this.enemy attacks */
		for(var i = 0; i < this.enemy.attacks.length; i++) {
			this.enemy.attacks[i].available = true;
			this.enemy.attacks[i].lastused = -1;
		}
		
		/* Create player action menu */
		for(var i = 0; i < pat.length; i++) {
			var that = this;
			var temp = pat[i];
			this.amenu.adopt(temp.name, new gui.Button(this.engine, this.engine.canvas.width/2, 5 + 40*i, 280, 35, temp.name, function(){temp.exec(); temp.available = false; temp.lastused = that.turnnum;}));
		}
	}
	
	this.step = function() {
		this.turnnum++;
		
		/* Update attacks */
		var pat = this.engine.entities.player.attacks;
		for(var i = 0; i < pat.length; i++)
			if(!pat[i].available && turnnum - pat[i].lastused > pat[i].cooldown)
				pat[i].available = true;
		
		/* Reset this.enemy attacks */
		for(var i = 0; i < this.enemy.attacks.length; i++)
			if(this.enemy.attacks[i].available && turnnum - this.enemy.attacks[i].lastused > this.enemy.attacks[i].cooldown)
				this.enemy.attacks[i].available = true;
		
		this.enemy.attacks.sort(debate.powcomp);
		
		for(var i = 0; i < this.enemy.attacks.length; i++)
			if(this.enemy.attacks[i].available) {
				this.enemy.attacks[i].exec(this.engine.entities.player);
				this.enemy.attacks[i].lastused = this.turnnum;
				this.enemy.attacks[i].available = false;
				break;
			}
		 
	}
	
	this.update = function(delta) {
		var pat = this.engine.entities.player.attacks;
		for(var i = 0; i < pat.length; i++)
			if(pat[i].available) {
				this.amenu.children[pat[i].name].state = gui.STATE.NORMAL;
			}
			else {
				this.amenu.children[pat[i].name].state = gui.STATE.DISABLED;
			}
	}
	
	this.render = function(context) {
		context.fillStyle = "white";
		context.fillRect(0, 0, this.engine.canvas.width, this.engine.canvas.height);
	}
}

debate.Attack = function(name, exec, cooldown, power) {
	this.exec = exec;
	this.name = name;
	this.available = true;
	this.cooldown = cooldown || 0;
	this.lastused = 0;
	this.power = power;
}

debate.powcomp = function (a1, a2) {return a1.power - a2.power}