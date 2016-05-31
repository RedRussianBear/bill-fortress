/** States. */
var STATE = {NULL: 0, START: 1, PAUSE: 2, OVERWORLD: 3, DEBATE: 4, CHARACTER: 5};

/* Global font. */
var FONT = "bitfont";

/** The Bill Fortress game engine. */
function Fortress(canvas) {
    
    /* Super constructor and superclass reference. */
	Engine.call(this, canvas);
    var superclass = new Engine();	
	
	/* Basic things */
	this.entities.gui = new gui.Manager(this);
    this.state = STATE.START;
    	
	this.setup = function() {
		this.context.imageSmoothingEnabled= false
	
		/* Create the player */
		this.entities.player = this.player = new Bill(this);
		this.player.attacks.push(new debate.Attack("An attack", function(enemy){console.log("wow")}, 0, 0));
		/* Create world */
		this.entities.world = new world.World(this);
		
		/* Create debate manager */
		this.entities.debate = new debate.Manager(this);
		
		/* Load level files */
		mklevels();
		
		/* Load resources */
		this.resources.queue("bw0", resource.IMAGE, "sprites/bill/West/frame1.png");
		this.resources.queue("bw1", resource.IMAGE, "sprites/bill/West/frame2.png");
		this.resources.queue("be0", resource.IMAGE, "sprites/bill/East/frame1.png");
		this.resources.queue("be1", resource.IMAGE, "sprites/bill/East/frame2.png");
		this.resources.queue("bn0", resource.IMAGE, "sprites/bill/North/frame1.png");
		this.resources.queue("bn1", resource.IMAGE, "sprites/bill/North/frame2.png");
		this.resources.queue("bn2", resource.IMAGE, "sprites/bill/North/frame3.png");
		this.resources.queue("bn3", resource.IMAGE, "sprites/bill/North/frame4.png");
		this.resources.queue("bs0", resource.IMAGE, "sprites/bill/South/frame1.png");
		this.resources.queue("bs1", resource.IMAGE, "sprites/bill/South/frame2.png");
		this.resources.queue("bs2", resource.IMAGE, "sprites/bill/South/frame3.png");
		this.resources.queue("bs3", resource.IMAGE, "sprites/bill/South/frame4.png");
		
		/* Democratic congressperson */
		this.resources.queue("de0", resource.IMAGE, "sprites/congressdem/East/frame1.png");
		this.resources.queue("de1", resource.IMAGE, "sprites/congressdem/East/frame2.png");
		this.resources.queue("dw0", resource.IMAGE, "sprites/congressdem/West/frame1.png");
		this.resources.queue("dw1", resource.IMAGE, "sprites/congressdem/West/frame2.png");
		this.resources.queue("dn0", resource.IMAGE, "sprites/congressdem/North/frame1.png");
		this.resources.queue("dn1", resource.IMAGE, "sprites/congressdem/North/frame2.png");
		this.resources.queue("dn2", resource.IMAGE, "sprites/congressdem/North/frame3.png");
		this.resources.queue("dn3", resource.IMAGE, "sprites/congressdem/North/frame4.png");
		this.resources.queue("ds0", resource.IMAGE, "sprites/congressdem/South/frame1.png");
		this.resources.queue("ds1", resource.IMAGE, "sprites/congressdem/South/frame2.png");
		this.resources.queue("ds2", resource.IMAGE, "sprites/congressdem/South/frame3.png");
		this.resources.queue("ds3", resource.IMAGE, "sprites/congressdem/South/frame4.png");

		/* Republican congressperson */
		this.resources.queue("re0", resource.IMAGE, "sprites/congressrep/East/frame1.png");
		this.resources.queue("re1", resource.IMAGE, "sprites/congressrep/East/frame2.png");
		this.resources.queue("rw0", resource.IMAGE, "sprites/congressrep/West/frame1.png");
		this.resources.queue("rw1", resource.IMAGE, "sprites/congressrep/West/frame2.png");
		this.resources.queue("rn0", resource.IMAGE, "sprites/congressrep/North/frame1.png");
		this.resources.queue("rn1", resource.IMAGE, "sprites/congressrep/North/frame2.png");
		this.resources.queue("rn2", resource.IMAGE, "sprites/congressrep/North/frame3.png");
		this.resources.queue("rn3", resource.IMAGE, "sprites/congressrep/North/frame4.png");
		this.resources.queue("rs0", resource.IMAGE, "sprites/congressrep/South/frame1.png");
		this.resources.queue("rs1", resource.IMAGE, "sprites/congressrep/South/frame2.png");
		this.resources.queue("rs2", resource.IMAGE, "sprites/congressrep/South/frame3.png");
		this.resources.queue("rs3", resource.IMAGE, "sprites/congressrep/South/frame4.png");

		/* Sanders congressperson */
		this.resources.queue("se0", resource.IMAGE, "sprites/congresssan/East/frame1.png");
		this.resources.queue("se1", resource.IMAGE, "sprites/congresssan/East/frame2.png");
		this.resources.queue("sw0", resource.IMAGE, "sprites/congresssan/West/frame1.png");
		this.resources.queue("sw1", resource.IMAGE, "sprites/congresssan/West/frame2.png");
		this.resources.queue("sn0", resource.IMAGE, "sprites/congresssan/North/frame1.png");
		this.resources.queue("sn1", resource.IMAGE, "sprites/congresssan/North/frame2.png");
		this.resources.queue("sn2", resource.IMAGE, "sprites/congresssan/North/frame3.png");
		this.resources.queue("sn3", resource.IMAGE, "sprites/congresssan/North/frame4.png");
		this.resources.queue("ss0", resource.IMAGE, "sprites/congresssan/South/frame1.png");
		this.resources.queue("ss1", resource.IMAGE, "sprites/congresssan/South/frame2.png");
		this.resources.queue("ss2", resource.IMAGE, "sprites/congresssan/South/frame3.png");
		this.resources.queue("ss3", resource.IMAGE, "sprites/congresssan/South/frame4.png");
		
		this.resources.queue("walkable", resource.IMAGE, "tiles/walkable.png");
		var that = this;
		this.resources.load(function() {
			/* Player sprite */
			that.entities.player.images[Bill.DIRECTION.LEFT] = new Array();
			that.entities.player.images[Bill.DIRECTION.LEFT].push(that.resources.$("bw0"));
			that.entities.player.images[Bill.DIRECTION.LEFT].push(that.resources.$("bw1"));
			that.entities.player.images[Bill.DIRECTION.UP] = new Array();
			that.entities.player.images[Bill.DIRECTION.UP].push(that.resources.$("bn0"));
			that.entities.player.images[Bill.DIRECTION.UP].push(that.resources.$("bn1"));
			that.entities.player.images[Bill.DIRECTION.UP].push(that.resources.$("bn2"));
			that.entities.player.images[Bill.DIRECTION.UP].push(that.resources.$("bn3"))
			that.entities.player.images[Bill.DIRECTION.RIGHT] = new Array();
			that.entities.player.images[Bill.DIRECTION.RIGHT].push(that.resources.$("be0"));
			that.entities.player.images[Bill.DIRECTION.RIGHT].push(that.resources.$("be1"));
			that.entities.player.images[Bill.DIRECTION.DOWN] = new Array();
			that.entities.player.images[Bill.DIRECTION.DOWN].push(that.resources.$("bs0"));
			that.entities.player.images[Bill.DIRECTION.DOWN].push(that.resources.$("bs1"));
			that.entities.player.images[Bill.DIRECTION.DOWN].push(that.resources.$("bs2"));
			that.entities.player.images[Bill.DIRECTION.DOWN].push(that.resources.$("bs3"));
		
			/* Democratic congressperson */
			mobs.SPRITES[mobs.PARTY.DEMOCRAT] = new Array();
			mobs.SPRITES[mobs.PARTY.DEMOCRAT][mobs.DIRECTION.LEFT] = new Array();
			mobs.SPRITES[mobs.PARTY.DEMOCRAT][mobs.DIRECTION.LEFT].push(that.resources.$("dw0"));
			mobs.SPRITES[mobs.PARTY.DEMOCRAT][mobs.DIRECTION.LEFT].push(that.resources.$("dw1"));
			mobs.SPRITES[mobs.PARTY.DEMOCRAT][mobs.DIRECTION.RIGHT] = new Array();
			mobs.SPRITES[mobs.PARTY.DEMOCRAT][mobs.DIRECTION.RIGHT].push(that.resources.$("de0"));
			mobs.SPRITES[mobs.PARTY.DEMOCRAT][mobs.DIRECTION.RIGHT].push(that.resources.$("de1"));
			mobs.SPRITES[mobs.PARTY.DEMOCRAT][mobs.DIRECTION.UP] = new Array();
			mobs.SPRITES[mobs.PARTY.DEMOCRAT][mobs.DIRECTION.UP].push(that.resources.$("dn0"));
			mobs.SPRITES[mobs.PARTY.DEMOCRAT][mobs.DIRECTION.UP].push(that.resources.$("dn1"));
			mobs.SPRITES[mobs.PARTY.DEMOCRAT][mobs.DIRECTION.UP].push(that.resources.$("dn2"));
			mobs.SPRITES[mobs.PARTY.DEMOCRAT][mobs.DIRECTION.UP].push(that.resources.$("dn3"));
			mobs.SPRITES[mobs.PARTY.DEMOCRAT][mobs.DIRECTION.DOWN] = new Array();
			mobs.SPRITES[mobs.PARTY.DEMOCRAT][mobs.DIRECTION.DOWN].push(that.resources.$("ds0"));
			mobs.SPRITES[mobs.PARTY.DEMOCRAT][mobs.DIRECTION.DOWN].push(that.resources.$("ds1"));
			mobs.SPRITES[mobs.PARTY.DEMOCRAT][mobs.DIRECTION.DOWN].push(that.resources.$("ds2"));
			mobs.SPRITES[mobs.PARTY.DEMOCRAT][mobs.DIRECTION.DOWN].push(that.resources.$("ds3"));
						
			/* Republican congressperson */
			mobs.SPRITES[mobs.PARTY.REPUBLICAN] = new Array();
			mobs.SPRITES[mobs.PARTY.REPUBLICAN][mobs.DIRECTION.LEFT] = new Array();
			mobs.SPRITES[mobs.PARTY.REPUBLICAN][mobs.DIRECTION.LEFT].push(that.resources.$("rw0"));
			mobs.SPRITES[mobs.PARTY.REPUBLICAN][mobs.DIRECTION.LEFT].push(that.resources.$("rw1"));
			mobs.SPRITES[mobs.PARTY.REPUBLICAN][mobs.DIRECTION.RIGHT] = new Array();
			mobs.SPRITES[mobs.PARTY.REPUBLICAN][mobs.DIRECTION.RIGHT].push(that.resources.$("re0"));
			mobs.SPRITES[mobs.PARTY.REPUBLICAN][mobs.DIRECTION.RIGHT].push(that.resources.$("re1"));
			mobs.SPRITES[mobs.PARTY.REPUBLICAN][mobs.DIRECTION.UP] = new Array();
			mobs.SPRITES[mobs.PARTY.REPUBLICAN][mobs.DIRECTION.UP].push(that.resources.$("rn0"));
			mobs.SPRITES[mobs.PARTY.REPUBLICAN][mobs.DIRECTION.UP].push(that.resources.$("rn1"));
			mobs.SPRITES[mobs.PARTY.REPUBLICAN][mobs.DIRECTION.UP].push(that.resources.$("rn2"));
			mobs.SPRITES[mobs.PARTY.REPUBLICAN][mobs.DIRECTION.UP].push(that.resources.$("rn3"));
			mobs.SPRITES[mobs.PARTY.REPUBLICAN][mobs.DIRECTION.DOWN] = new Array();
			mobs.SPRITES[mobs.PARTY.REPUBLICAN][mobs.DIRECTION.DOWN].push(that.resources.$("rs0"));
			mobs.SPRITES[mobs.PARTY.REPUBLICAN][mobs.DIRECTION.DOWN].push(that.resources.$("rs1"));
			mobs.SPRITES[mobs.PARTY.REPUBLICAN][mobs.DIRECTION.DOWN].push(that.resources.$("rs2"));
			mobs.SPRITES[mobs.PARTY.REPUBLICAN][mobs.DIRECTION.DOWN].push(that.resources.$("rs3"));
			
			/* Sanders congressperson */
			mobs.SPRITES[mobs.PARTY.SANDERS] = new Array();
			mobs.SPRITES[mobs.PARTY.SANDERS][mobs.DIRECTION.LEFT] = new Array();
			mobs.SPRITES[mobs.PARTY.SANDERS][mobs.DIRECTION.LEFT].push(that.resources.$("sw0"));
			mobs.SPRITES[mobs.PARTY.SANDERS][mobs.DIRECTION.LEFT].push(that.resources.$("sw1"));
			mobs.SPRITES[mobs.PARTY.SANDERS][mobs.DIRECTION.RIGHT] = new Array();
			mobs.SPRITES[mobs.PARTY.SANDERS][mobs.DIRECTION.RIGHT].push(that.resources.$("se0"));
			mobs.SPRITES[mobs.PARTY.SANDERS][mobs.DIRECTION.RIGHT].push(that.resources.$("se1"));
			mobs.SPRITES[mobs.PARTY.SANDERS][mobs.DIRECTION.UP] = new Array();
			mobs.SPRITES[mobs.PARTY.SANDERS][mobs.DIRECTION.UP].push(that.resources.$("sn0"));
			mobs.SPRITES[mobs.PARTY.SANDERS][mobs.DIRECTION.UP].push(that.resources.$("sn1"));
			mobs.SPRITES[mobs.PARTY.SANDERS][mobs.DIRECTION.UP].push(that.resources.$("sn2"));
			mobs.SPRITES[mobs.PARTY.SANDERS][mobs.DIRECTION.UP].push(that.resources.$("sn3"));
			mobs.SPRITES[mobs.PARTY.SANDERS][mobs.DIRECTION.DOWN] = new Array();
			mobs.SPRITES[mobs.PARTY.SANDERS][mobs.DIRECTION.DOWN].push(that.resources.$("ss0"));
			mobs.SPRITES[mobs.PARTY.SANDERS][mobs.DIRECTION.DOWN].push(that.resources.$("ss1"));
			mobs.SPRITES[mobs.PARTY.SANDERS][mobs.DIRECTION.DOWN].push(that.resources.$("ss2"));
			mobs.SPRITES[mobs.PARTY.SANDERS][mobs.DIRECTION.DOWN].push(that.resources.$("ss3"));
		
			world.TILE.FLOOR = that.resources.$("walkable");
			console.log("Loaded reources");
		});
	
	    /* Create the start menu. */
	    var menu = this.entities.gui.adopt("start", new gui.Component(this, 0, 0, this.canvas.width, this.canvas.height, {})); 
	    menu.adopt("title", new gui.Text(
	        this, this.canvas.width/2, 200, "Bill Fortress", {base: {font: "60px " + FONT}}
	    ));
	    menu.adopt("tagline", new gui.Text(
	        this, this.canvas.width/2, 250, "A game of legislation", {base: {font: "30px " + FONT}}
	    ));
	    menu.adopt("start", new gui.Button(
	        this, this.canvas.width/2 - 150, 380, 300, 40, "New Game", function() {
				this.parent.state = gui.STATE.DISABLED; 
				this.parent.visible = false;
				this.parent.engine.entities.gui.children.mkchar.state = gui.STATE.NORMAL;
				this.parent.engine.entities.gui.children.mkchar.visible = true;
		}));
		menu.state = gui.STATE.NORMAL;
		menu.visible = true;
		
		/* Character creation menu */
		var mkchar = this.entities.gui.adopt("mkchar", new gui.Component(this, 0, 0, this.canvas.width, this.canvas.height, {}));
		mkchar.adopt("title", new gui.Text(this, this.canvas.width/2, 30, "Character Creation", {base: {font: "46px " + FONT}}));
		mkchar.adopt("nmtxt", new gui.Text(this, 10, 90, "Bill Name:", {base: {font: "32px " + FONT, textAlign: "left"}}));
		mkchar.adopt("nameinput", new gui.InputField(this, 10, 118, 400, 30));
		mkchar.adopt("begin", new gui.Button(
				this, this.canvas.width/2 - 150, 500, 300, 40, "Begin", function() {
					this.parent.state = gui.STATE.DISABLED; 
					this.parent.visible = false;
					this.parent.engine.entities.gui.children.hud.state = gui.STATE.NORMAL;
					this.parent.engine.entities.gui.children.hud.visible = true;
					this.parent.engine.entities.gui.children.hud.children.nmtxt.text = this.parent.children.nameinput.text;
					this.parent.engine.entities.player.name = this.parent.children.nameinput.text;
					this.parent.engine.entities.gui.children.debate.children.bill.children.name.text = this.parent.children.nameinput.text;
					this.parent.engine.entities.world.loadLevel(levels.TEST);
					this.parent.engine.entities.player.transform.x = this.parent.engine.entities.world.playerx;
					this.parent.engine.entities.player.transform.y = this.parent.engine.entities.world.playery;
					this.parent.engine.state = STATE.OVERWORLD;
		}));

		/* HUD */
		var hud = this.entities.gui.adopt("hud", new gui.Component(this, 0, 0, this.canvas.width, 35, {fillStyle: "black"}));
		hud.adopt("nmtxt", new gui.Text(this, 5, 15, "[playername]", {base: {font: "32px " + FONT, textAlign: "left"}}));
		
		/* Debate menu */
		var debatem = this.entities.gui.adopt("debate", new gui.Component(this, 0, 0, this.canvas.width, this.canvas.height, {}));
		var psubm = debatem.adopt("bill", new gui.Component(this, 0, 400, this.canvas.width, 200, {fillStyle: "black"}));
		var esubm = debatem.adopt("enemy", new gui.Component(this, 0, 0, this.canvas.width, 100, {fillStyle: "black"}));
		debatem.adopt("message", new gui.Text(this, this.canvas.width/2, 350, "[message]", {base: {font: "42px " + FONT, fillStyle: "black"}}));
		/* Debate menu, enemy sub-menu */
		esubm.adopt("name", new gui.Text(this, 20, 25, "[enemyname]", {base: {font: "46px " + FONT, textAlign: "left"}}));
		esubm.adopt("health", new gui.StatBar(this, this.canvas.width/2, 10, this.canvas.width/2 - 10, 80, 100, 60, {}));
		esubm.state = gui.STATE.NORMAL;
		esubm.visible = true;
		/* Debate menu, player sub-menu */
		psubm.adopt("name", new gui.Text(this, 20, 25, "[playername]", {base: {font: "46px " + FONT, textAlign: "left"}}));
		psubm.adopt("health", new gui.StatBar(this, 20, 100, this.canvas.width/2 - 30, 80, 100, 60, {}));
		psubm.state = gui.STATE.NORMAL;
		psubm.visible = true;
		var attackm = psubm.adopt("actions", new gui.Component(this, 0, 0, this.canvas.width/2, 200, {}));
		attackm.state = gui.STATE.NORMAL;
		attackm.visible = true;
    }
    
	this.initdebate = function(enemy) {
		this.state = STATE.DEBATE;
		this.entities.gui.children.hud.visible = false;
		this.entities.gui.children.hud.state = gui.STATE.DISABLED;
		this.entities.gui.children.debate.children.enemy.children.name.text = enemy.name;
		this.entities.gui.children.debate.children.enemy.children.health.max = enemy.maxhealth;
		this.entities.gui.children.debate.children.enemy.children.health.val = enemy.health;
		this.entities.gui.children.debate.children.bill.children.health.max = enemy.maxhealth;
		this.entities.gui.children.debate.children.bill.children.health.val = enemy.health;
		this.entities.debate.start(enemy);
		this.entities.gui.children.debate.state = gui.STATE.NORMAL;
		this.entities.gui.children.debate.visible = true;
	}
	
	this.findebate = function() {
		this.state = STATE.OVERWORLD;
		this.entities.gui.children.hud.visible = true;
		this.entities.gui.children.hud.state = gui.STATE.NORMAL;
		this.entities.gui.children.debate.visible = false;
		this.entities.gui.children.debate.state = gui.STATE.DISABLED;
	}
	
	/* Update loop. */
    this.update = function(delta) {

		/* Update GUI. */
		this.entities.gui.update(delta);
		
		/* Update input. */
		this.input.update(delta);
		
		/* Update states. */
		switch (this.state) {
		
		    /* Start menu. */
			case STATE.START:
				break;

			/* Overworld */
			case STATE.OVERWORLD:
				this.entities.world.update(delta);
				this.entities.player.update(delta);
				break;
				
			/* Debate */
			case STATE.DEBATE:
				this.entities.debate.update(delta);
				break;
		}
	}
	
    /* Render. */
	this.render = function(delta) {
		/* Get time of execution */
		var time = Date.now();
		
        /* Clear. */
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
 
		/* Rendering states. */
		switch (this.state) {
		
		    /* Start menu. */
			case STATE.START:
				break;

			/* Overworld */
			case STATE.PAUSE:
			case STATE.OVERWORLD:
				this.entities.world.render(this.context, this.entities.player.transform.x - this.canvas.width/2 + this.entities.player.width/2, this.entities.player.transform.y - this.canvas.height/2 + this.entities.player.height/2, time);
				this.entities.player.render(this.context, time);
				break;
				
			/* Debate */
			case STATE.DEBATE:
				this.entities.debate.render(this.context);
				break;
		}
		
		/* Render gui */
		this.entities.gui.render(this.context);
	}

}