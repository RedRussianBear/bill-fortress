/** States. */
var STATE = {NULL: 0, START: 1, PAUSE: 2, OVERWORLD: 3, DEBATE: 4, CHARACTER: 5, VICTORY: 6, DEFEAT: 7};

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
	
		this.slate();
		
		/* Load level files */
		mklevels();
		
		/* Load Bill Sprites */
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
		
		/* Load Mob Sprites */
		this.resources.queue("dmpe0", resource.IMAGE, "sprites/mobs/dem/male/pres/framee0.png");
		this.resources.queue("dmpe1", resource.IMAGE, "sprites/mobs/dem/male/pres/framee1.png");
		this.resources.queue("dmpn0", resource.IMAGE, "sprites/mobs/dem/male/pres/framen0.png");
		this.resources.queue("dmpn1", resource.IMAGE, "sprites/mobs/dem/male/pres/framen1.png");
		this.resources.queue("dmpn2", resource.IMAGE, "sprites/mobs/dem/male/pres/framen2.png");
		this.resources.queue("dmpn3", resource.IMAGE, "sprites/mobs/dem/male/pres/framen3.png");
		this.resources.queue("dmps0", resource.IMAGE, "sprites/mobs/dem/male/pres/frames0.png");
		this.resources.queue("dmps1", resource.IMAGE, "sprites/mobs/dem/male/pres/frames1.png");
		this.resources.queue("dmps2", resource.IMAGE, "sprites/mobs/dem/male/pres/frames2.png");
		this.resources.queue("dmps3", resource.IMAGE, "sprites/mobs/dem/male/pres/frames3.png");
		this.resources.queue("dmpw0", resource.IMAGE, "sprites/mobs/dem/male/pres/framew0.png");
		this.resources.queue("dmpw1", resource.IMAGE, "sprites/mobs/dem/male/pres/framew1.png");
		this.resources.queue("dmse0", resource.IMAGE, "sprites/mobs/dem/male/sanders/framee0.png");
		this.resources.queue("dmse1", resource.IMAGE, "sprites/mobs/dem/male/sanders/framee1.png");
		this.resources.queue("dmsn0", resource.IMAGE, "sprites/mobs/dem/male/sanders/framen0.png");
		this.resources.queue("dmsn1", resource.IMAGE, "sprites/mobs/dem/male/sanders/framen1.png");
		this.resources.queue("dmsn2", resource.IMAGE, "sprites/mobs/dem/male/sanders/framen2.png");
		this.resources.queue("dmsn3", resource.IMAGE, "sprites/mobs/dem/male/sanders/framen3.png");
		this.resources.queue("dmss0", resource.IMAGE, "sprites/mobs/dem/male/sanders/frames0.png");
		this.resources.queue("dmss1", resource.IMAGE, "sprites/mobs/dem/male/sanders/frames1.png");
		this.resources.queue("dmss2", resource.IMAGE, "sprites/mobs/dem/male/sanders/frames2.png");
		this.resources.queue("dmss3", resource.IMAGE, "sprites/mobs/dem/male/sanders/frames3.png");
		this.resources.queue("dmsw0", resource.IMAGE, "sprites/mobs/dem/male/sanders/framew0.png");
		this.resources.queue("dmsw1", resource.IMAGE, "sprites/mobs/dem/male/sanders/framew1.png");
		this.resources.queue("dmwe0", resource.IMAGE, "sprites/mobs/dem/male/white_congress/framee0.png");
		this.resources.queue("dmwe1", resource.IMAGE, "sprites/mobs/dem/male/white_congress/framee1.png");
		this.resources.queue("dmwn0", resource.IMAGE, "sprites/mobs/dem/male/white_congress/framen0.png");
		this.resources.queue("dmwn1", resource.IMAGE, "sprites/mobs/dem/male/white_congress/framen1.png");
		this.resources.queue("dmwn2", resource.IMAGE, "sprites/mobs/dem/male/white_congress/framen2.png");
		this.resources.queue("dmwn3", resource.IMAGE, "sprites/mobs/dem/male/white_congress/framen3.png");
		this.resources.queue("dmws0", resource.IMAGE, "sprites/mobs/dem/male/white_congress/frames0.png");
		this.resources.queue("dmws1", resource.IMAGE, "sprites/mobs/dem/male/white_congress/frames1.png");
		this.resources.queue("dmws2", resource.IMAGE, "sprites/mobs/dem/male/white_congress/frames2.png");
		this.resources.queue("dmws3", resource.IMAGE, "sprites/mobs/dem/male/white_congress/frames3.png");
		this.resources.queue("dmww0", resource.IMAGE, "sprites/mobs/dem/male/white_congress/framew0.png");
		this.resources.queue("dmww1", resource.IMAGE, "sprites/mobs/dem/male/white_congress/framew1.png");
		this.resources.queue("rmwe0", resource.IMAGE, "sprites/mobs/rep/male/white_congress/framee0.png");
		this.resources.queue("rmwe1", resource.IMAGE, "sprites/mobs/rep/male/white_congress/framee1.png");
		this.resources.queue("rmwn0", resource.IMAGE, "sprites/mobs/rep/male/white_congress/framen0.png");
		this.resources.queue("rmwn1", resource.IMAGE, "sprites/mobs/rep/male/white_congress/framen1.png");
		this.resources.queue("rmwn2", resource.IMAGE, "sprites/mobs/rep/male/white_congress/framen2.png");
		this.resources.queue("rmwn3", resource.IMAGE, "sprites/mobs/rep/male/white_congress/framen3.png");
		this.resources.queue("rmws0", resource.IMAGE, "sprites/mobs/rep/male/white_congress/frames0.png");
		this.resources.queue("rmws1", resource.IMAGE, "sprites/mobs/rep/male/white_congress/frames1.png");
		this.resources.queue("rmws2", resource.IMAGE, "sprites/mobs/rep/male/white_congress/frames2.png");
		this.resources.queue("rmws3", resource.IMAGE, "sprites/mobs/rep/male/white_congress/frames3.png");
		this.resources.queue("rmww0", resource.IMAGE, "sprites/mobs/rep/male/white_congress/framew0.png");
		this.resources.queue("rmww1", resource.IMAGE, "sprites/mobs/rep/male/white_congress/framew1.png");
        
        /* Sound effects. */
        this.resources.queue("ambient01", resource.AUDIO, "sounds/america.wav");
        this.resources.queue("ambient02", resource.AUDIO, "sounds/battlecry.wav");
        this.resources.queue("ambient03", resource.AUDIO, "sounds/anthem2.wav");
        this.resources.queue("alarm", resource.AUDIO, "sounds/sfx/alert.wav");
        this.resources.queue("death", resource.AUDIO, "sounds/sfx/shoot.wav");
		
		this.resources.queue("walkable", resource.IMAGE, "tiles/walkable.png");
		this.resources.queue("wall", resource.IMAGE, "tiles/notwalkable.png");
		this.resources.queue("exit", resource.IMAGE, "tiles/exit.png");
		this.resources.queue("chest", resource.IMAGE, "sprites/objects/chest.png");
		this.resources.queue("victory", resource.IMAGE, "logo.png");

		var that = this;
		this.resources.load(function() {
			/* Player sprite */
			that.entities.gui.children.character.children.picture.image = that.resources.$("be0");
			bill.SPRITES[bill.DIRECTION.LEFT] = new Array();
			bill.SPRITES[bill.DIRECTION.LEFT].push(that.resources.$("bw0"));
			bill.SPRITES[bill.DIRECTION.LEFT].push(that.resources.$("bw1"));
			bill.SPRITES[bill.DIRECTION.UP] = new Array();
			bill.SPRITES[bill.DIRECTION.UP].push(that.resources.$("bn0"));
			bill.SPRITES[bill.DIRECTION.UP].push(that.resources.$("bn1"));
			bill.SPRITES[bill.DIRECTION.UP].push(that.resources.$("bn2"));
			bill.SPRITES[bill.DIRECTION.UP].push(that.resources.$("bn3"))
			bill.SPRITES[bill.DIRECTION.RIGHT] = new Array();
			bill.SPRITES[bill.DIRECTION.RIGHT].push(that.resources.$("be0"));
			bill.SPRITES[bill.DIRECTION.RIGHT].push(that.resources.$("be1"));
			bill.SPRITES[bill.DIRECTION.DOWN] = new Array();
			bill.SPRITES[bill.DIRECTION.DOWN].push(that.resources.$("bs0"));
			bill.SPRITES[bill.DIRECTION.DOWN].push(that.resources.$("bs1"));
			bill.SPRITES[bill.DIRECTION.DOWN].push(that.resources.$("bs2"));
			bill.SPRITES[bill.DIRECTION.DOWN].push(that.resources.$("bs3"));
			
			/* Assign Sprites */
			mobs.SPRITES["dmp"] = new Array();
			mobs.SPRITES["dmp"][mobs.DIRECTION.UP] = new Array();
			mobs.SPRITES["dmp"][mobs.DIRECTION.DOWN] = new Array();
			mobs.SPRITES["dmp"][mobs.DIRECTION.LEFT] = new Array();
			mobs.SPRITES["dmp"][mobs.DIRECTION.RIGHT] = new Array();
			mobs.SPRITES["dmp"][mobs.DIRECTION.RIGHT].push(that.resources.$("dmpe0"));
			mobs.SPRITES["dmp"][mobs.DIRECTION.RIGHT].push(that.resources.$("dmpe1"));
			mobs.SPRITES["dmp"][mobs.DIRECTION.UP].push(that.resources.$("dmpn0"));
			mobs.SPRITES["dmp"][mobs.DIRECTION.UP].push(that.resources.$("dmpn1"));
			mobs.SPRITES["dmp"][mobs.DIRECTION.UP].push(that.resources.$("dmpn2"));
			mobs.SPRITES["dmp"][mobs.DIRECTION.UP].push(that.resources.$("dmpn3"));
			mobs.SPRITES["dmp"][mobs.DIRECTION.DOWN].push(that.resources.$("dmps0"));
			mobs.SPRITES["dmp"][mobs.DIRECTION.DOWN].push(that.resources.$("dmps1"));
			mobs.SPRITES["dmp"][mobs.DIRECTION.DOWN].push(that.resources.$("dmps2"));
			mobs.SPRITES["dmp"][mobs.DIRECTION.DOWN].push(that.resources.$("dmps3"));
			mobs.SPRITES["dmp"][mobs.DIRECTION.LEFT].push(that.resources.$("dmpw0"));
			mobs.SPRITES["dmp"][mobs.DIRECTION.LEFT].push(that.resources.$("dmpw1"));
			mobs.SPRITES["dms"] = new Array();
			mobs.SPRITES["dms"][mobs.DIRECTION.UP] = new Array();
			mobs.SPRITES["dms"][mobs.DIRECTION.DOWN] = new Array();
			mobs.SPRITES["dms"][mobs.DIRECTION.LEFT] = new Array();
			mobs.SPRITES["dms"][mobs.DIRECTION.RIGHT] = new Array();
			mobs.SPRITES["dms"][mobs.DIRECTION.RIGHT].push(that.resources.$("dmse0"));
			mobs.SPRITES["dms"][mobs.DIRECTION.RIGHT].push(that.resources.$("dmse1"));
			mobs.SPRITES["dms"][mobs.DIRECTION.UP].push(that.resources.$("dmsn0"));
			mobs.SPRITES["dms"][mobs.DIRECTION.UP].push(that.resources.$("dmsn1"));
			mobs.SPRITES["dms"][mobs.DIRECTION.UP].push(that.resources.$("dmsn2"));
			mobs.SPRITES["dms"][mobs.DIRECTION.UP].push(that.resources.$("dmsn3"));
			mobs.SPRITES["dms"][mobs.DIRECTION.DOWN].push(that.resources.$("dmss0"));
			mobs.SPRITES["dms"][mobs.DIRECTION.DOWN].push(that.resources.$("dmss1"));
			mobs.SPRITES["dms"][mobs.DIRECTION.DOWN].push(that.resources.$("dmss2"));
			mobs.SPRITES["dms"][mobs.DIRECTION.DOWN].push(that.resources.$("dmss3"));
			mobs.SPRITES["dms"][mobs.DIRECTION.LEFT].push(that.resources.$("dmsw0"));
			mobs.SPRITES["dms"][mobs.DIRECTION.LEFT].push(that.resources.$("dmsw1"));
			mobs.SPRITES["dmw"] = new Array();
			mobs.SPRITES["dmw"][mobs.DIRECTION.UP] = new Array();
			mobs.SPRITES["dmw"][mobs.DIRECTION.DOWN] = new Array();
			mobs.SPRITES["dmw"][mobs.DIRECTION.LEFT] = new Array();
			mobs.SPRITES["dmw"][mobs.DIRECTION.RIGHT] = new Array();
			mobs.SPRITES["dmw"][mobs.DIRECTION.RIGHT].push(that.resources.$("dmwe0"));
			mobs.SPRITES["dmw"][mobs.DIRECTION.RIGHT].push(that.resources.$("dmwe1"));
			mobs.SPRITES["dmw"][mobs.DIRECTION.UP].push(that.resources.$("dmwn0"));
			mobs.SPRITES["dmw"][mobs.DIRECTION.UP].push(that.resources.$("dmwn1"));
			mobs.SPRITES["dmw"][mobs.DIRECTION.UP].push(that.resources.$("dmwn2"));
			mobs.SPRITES["dmw"][mobs.DIRECTION.UP].push(that.resources.$("dmwn3"));
			mobs.SPRITES["dmw"][mobs.DIRECTION.DOWN].push(that.resources.$("dmws0"));
			mobs.SPRITES["dmw"][mobs.DIRECTION.DOWN].push(that.resources.$("dmws1"));
			mobs.SPRITES["dmw"][mobs.DIRECTION.DOWN].push(that.resources.$("dmws2"));
			mobs.SPRITES["dmw"][mobs.DIRECTION.DOWN].push(that.resources.$("dmws3"));
			mobs.SPRITES["dmw"][mobs.DIRECTION.LEFT].push(that.resources.$("dmww0"));
			mobs.SPRITES["dmw"][mobs.DIRECTION.LEFT].push(that.resources.$("dmww1"));
			mobs.SPRITES["rmw"] = new Array();
			mobs.SPRITES["rmw"][mobs.DIRECTION.UP] = new Array();
			mobs.SPRITES["rmw"][mobs.DIRECTION.DOWN] = new Array();
			mobs.SPRITES["rmw"][mobs.DIRECTION.LEFT] = new Array();
			mobs.SPRITES["rmw"][mobs.DIRECTION.RIGHT] = new Array();
			mobs.SPRITES["rmw"][mobs.DIRECTION.RIGHT].push(that.resources.$("rmwe0"));
			mobs.SPRITES["rmw"][mobs.DIRECTION.RIGHT].push(that.resources.$("rmwe1"));
			mobs.SPRITES["rmw"][mobs.DIRECTION.UP].push(that.resources.$("rmwn0"));
			mobs.SPRITES["rmw"][mobs.DIRECTION.UP].push(that.resources.$("rmwn1"));
			mobs.SPRITES["rmw"][mobs.DIRECTION.UP].push(that.resources.$("rmwn2"));
			mobs.SPRITES["rmw"][mobs.DIRECTION.UP].push(that.resources.$("rmwn3"));
			mobs.SPRITES["rmw"][mobs.DIRECTION.DOWN].push(that.resources.$("rmws0"));
			mobs.SPRITES["rmw"][mobs.DIRECTION.DOWN].push(that.resources.$("rmws1"));
			mobs.SPRITES["rmw"][mobs.DIRECTION.DOWN].push(that.resources.$("rmws2"));
			mobs.SPRITES["rmw"][mobs.DIRECTION.DOWN].push(that.resources.$("rmws3"));
			mobs.SPRITES["rmw"][mobs.DIRECTION.LEFT].push(that.resources.$("rmww0"));
			mobs.SPRITES["rmw"][mobs.DIRECTION.LEFT].push(that.resources.$("rmww1"));
		
			world.SPRITES[world.CELL.WALL] = that.resources.$("wall");
			world.SPRITES[world.CELL.FLOOR] = that.resources.$("walkable");
			world.SPRITES[world.CELL.EXIT] = that.resources.$("exit");
			world.SPRITES[world.CELL.SECRET] = that.resources.$("wall");
			world.SPRITES.CHEST = that.resources.$("chest");
			
			that.vsplash = that.resources.$("victory");
			
			console.log("Loaded resources");
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
				this.engine.entities.gui.children.mkchar.state = gui.STATE.NORMAL;
				this.engine.entities.gui.children.mkchar.visible = true;
		}));
		menu.state = gui.STATE.NORMAL;
		menu.visible = true;
		
		
		/* Character creation menu */
		var mkchar = this.entities.gui.adopt("mkchar", new gui.Component(this, 0, 0, this.canvas.width, this.canvas.height, {}));
		mkchar.adopt("title", new gui.Text(this, this.canvas.width/2, 30, "Character Creation", {base: {font: "46px " + FONT}}));
		mkchar.adopt("nmtxt", new gui.Text(this, 10, 90, "Bill Name:", {base: {font: "32px " + FONT, textAlign: "left"}}));
		mkchar.adopt("nameinput", new gui.InputField(this, 10, 118, 400, 30));
		mkchar.adopt("inst1", new gui.Text(this, 10, 168, "Use WASD to move, M for Map", {base: {font: "32px " + FONT, textAlign: "left"}}));
		mkchar.adopt("inst2", new gui.Text(this, 10, 196, "Escape to view character", {base: {font: "32px " + FONT, textAlign: "left"}}));
		mkchar.adopt("inst3", new gui.Text(this, 10, 224, "Collect all endorsements to move on to next level", {base: {font: "32px " + FONT, textAlign: "left"}}));
		mkchar.adopt("begin", new gui.Button(
				this, this.canvas.width/2 - 150, 500, 300, 40, "Begin", function() {
					if(this.parent.children.nameinput.text.length == 0) {
						this.parent.children.nameinput.text = "An Unnamed Bill";
					}
					this.parent.state = gui.STATE.DISABLED; 
					this.parent.visible = false;
					this.engine.entities.gui.children.hud.state = gui.STATE.NORMAL;
					this.engine.entities.gui.children.hud.visible = true;
					this.engine.entities.gui.children.hud.children.nmtxt.text = this.parent.children.nameinput.text;
					this.engine.entities.player.name = this.parent.children.nameinput.text;
					this.engine.entities.gui.children.debate.children.bill.children.name.text = this.parent.children.nameinput.text;
					this.engine.entities.gui.children.character.children.name.text = this.parent.children.nameinput.text;
					this.engine.nextLevel();
					this.engine.state = STATE.OVERWORLD;
		}));

		/* HUD */
		var hud = this.entities.gui.adopt("hud", new gui.Component(this, 0, 0, this.canvas.width, 40, {fillStyle: "black"}));
		hud.adopt("nmtxt", new gui.Text(this, 5, 20, "[playername]", {base: {font: "32px " + FONT, textAlign: "left"}}, 260));
		hud.adopt("endtxt", new gui.Text(this, 625, 20, "Endorse.:", {base: {font: "32px " + FONT, textAlign: "right"}}));
		hud.adopt("endorsements", new gui.StatBar(this, 630, 5, 160, 30, 16, 0, {bar: {fillStyle: "green"}, text: {font: "30px " + FONT}}));
		hud.children.endorsements.tooltip = new gui.ToolTip(this, "How close you are to beating the level");
		hud.adopt("funds", new gui.Text(this, 275, 20, "Funds: $0k", {base: {font: "32px " + FONT, textAlign: "left"}}, 200));
		
		/* Debate menu */
		var debatem = this.entities.gui.adopt("debate", new gui.Component(this, 0, 0, this.canvas.width, this.canvas.height, {}));
		var psubm = debatem.adopt("bill", new gui.Component(this, 0, 400, this.canvas.width, 200, {fillStyle: "black"}));
		var esubm = debatem.adopt("enemy", new gui.Component(this, 0, 0, this.canvas.width, 100, {fillStyle: "black"}));
		debatem.adopt("message", new gui.Text(this, this.canvas.width/2, 350, "[message]", {base: {font: "42px " + FONT, fillStyle: "black"}}));
		/* Debate menu, enemy sub-menu */
		esubm.adopt("name", new gui.Text(this, 20, 25, "[enemyname]", {base: {font: "46px " + FONT, textAlign: "left"}}, 360));
		esubm.adopt("health", new gui.StatBar(this, this.canvas.width/2, 10, this.canvas.width/2 - 10, 80, 100, 60, {}));
		esubm.state = gui.STATE.NORMAL;
		esubm.visible = true;
		/* Debate menu, player sub-menu */
		psubm.adopt("name", new gui.Text(this, 20, 25, "[playername]", {base: {font: "46px " + FONT, textAlign: "left"}}, this.canvas.width/2 - 30));
		psubm.adopt("health", new gui.StatBar(this, 20, 100, this.canvas.width/2 - 30, 80, 100, 60, {}));
		psubm.state = gui.STATE.NORMAL;
		psubm.visible = true;
		var attackm = psubm.adopt("actions", new gui.Component(this, 0, 0, this.canvas.width/2, 200, {}));
		attackm.state = gui.STATE.NORMAL;
		attackm.visible = true;
		
		/* Character View Menu */
		var cha = this.entities.gui.adopt("character", new gui.Component(this, 100, 50, 600, 500, {fillStyle: "lightgrey"}));
		cha.adopt("name", new gui.Text(this, 10, 10, "[playername]", {base: {font: "50px " + FONT, textAlign: "left", fillStyle: "black", textBaseline: "top"}}, 280));
		cha.adopt("amend", new gui.Text(this, 310, 10, "Amendments", {base: {font: "50px " + FONT, textAlign: "left", fillStyle: "black", textBaseline: "top"}}, 280));
		cha.adopt("picture", new gui.Image(this, 20, 70, 256, 384));
		cha.adopt("amendments", new gui.Scroll(this, 310, 55, 280, 440));
		
		/* Defeat Menu */
		var def = this.entities.gui.adopt("defeat", new gui.Component(this, 0, 0, this.canvas.width, this.canvas.height, {}));
		def.adopt("text", new gui.Text(this, this.canvas.width/2, this.canvas.height/2 - 40, "You Lose", {base: {font: "52px " + FONT, textAlign: "center", fillStyle: "white"}}));
		def.adopt("restart", new gui.Button(this, this.canvas.width/2 - 100, this.canvas.height/2 + 20, 200, 60, "Restart", function(){
			this.engine.state = STATE.START;
			this.engine.levelnum = 0;
			this.parent.state = gui.STATE.DISABLED;
			this.parent.visible = false;
			this.engine.entities.gui.children.mkchar.state = gui.STATE.NORMAL;
			this.engine.entities.gui.children.mkchar.visible = true;
			this.engine.slate();
		}));
		
		this.levelnum = 0;
    }
	
	/* Clear the slate of the game */
	this.slate = function() {
		/* Create the player */
		this.entities.player = this.player = new bill.Bill(this);
		/* Create world */
		this.entities.world = new world.World(this);
		this.entities.map = new world.Map(this);
		
		/* Create debate manager */
		this.entities.debate = new debate.Manager(this);
	}
	
	this.nextLevel = function() {
		this.entities.world.load(levels[levels.LIST[this.levelnum]]);
		this.entities.gui.children.hud.children.endorsements.max = this.entities.world.endorsereq;
		this.entities.gui.children.hud.children.endorsements.val = 0;
		this.entities.player.transform.x = this.entities.world.playerx;
		this.entities.player.transform.y = this.entities.world.playery;
		this.entities.player.endorsements = 0;
		this.entities.map.setWorld(this.entities.world);
		this.levelnum++;
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
		/* Revert to Overworld */
		this.state = STATE.OVERWORLD;
		this.entities.gui.children.hud.visible = true;
		this.entities.gui.children.hud.state = gui.STATE.NORMAL;
		this.entities.gui.children.debate.visible = false;
		this.entities.gui.children.debate.state = gui.STATE.DISABLED;
	}
	
	this.uhud = function() {
		/* Update HUD */
		var hud = this.entities.gui.children.hud.children;
		hud.endorsements.val = this.player.endorsements;
		hud.funds.text = "Funds: $" + this.player.funds + "k";
	}
	
	/* Update loop. */
    this.update = function(delta) {

		/* Update GUI. */
		this.entities.gui.update(delta);
		
		/* Check for ESC */
		if(this.input.keyboard[input.KEY.ESCAPE] == input.STATE.PRESSED) {
			if(this.state == STATE.CHARACTER){
				this.state = STATE.OVERWORLD;
				this.entities.gui.children.character.state = gui.STATE.DISABLED;
				this.entities.gui.children.character.visible = false;
			}
			else if(this.state == STATE.OVERWORLD){
				this.state = STATE.CHARACTER;
				this.entities.gui.children.character.state = gui.STATE.NORMAL;
				this.entities.gui.children.character.visible = true;
			}
		}
		
		if(this.state == STATE.OVERWORLD) this.entities.map.update(delta);
		
		/* Update input. */
		this.input.update(delta);
	
		/* Update states. */
		switch (this.state) {
		
		    /* Start menu. */
			case STATE.START:
				break;

			/* Overworld */
			case STATE.OVERWORLD:
				this.entities.world.update(delta, this.offx, this.offy);
				this.entities.player.update(delta);
				break;
				
			/* Debate */
			case STATE.DEBATE:
				this.entities.debate.update(delta);
				break;
		}
		
		this.offx = this.entities.player.transform.x - this.canvas.width/2 + this.entities.player.width/2;
		this.offy = this.entities.player.transform.y - this.canvas.height/2 + this.entities.player.height/2;
	}
	
	/** Display engine statistics. */
    this.display = function() { 
        
        /* Draw the frames per second. */
        var fps = this._render.history.map(function(x) { return 1000/x; }).reduce(function(a, b) { return a+b; }, 0) / this._render.history.length;
        this.context.fillStyle = "white";
        this.context.textAlign = "left";
        this.context.textBaseline = "hanging";
        this.context.font = "16px bitfont";
        this.context.fillText(Math.round(fps) + " fps", 10, 10);
        
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
			case STATE.CHARACTER:
			case STATE.OVERWORLD:
				this.entities.world.render(this.context, this.offx, this.offy, time);
				this.entities.player.render(this.context, time);
				this.entities.map.render(this.context, this.player.transform);
				break;
				
			/* Debate */
			case STATE.DEBATE:
				this.entities.debate.render(this.context);
				break;
			
			case STATE.VICTORY:
				this.context.drawImage(this.vsplash, 0, 0, this.canvas.width, this.canvas.height);
				break;
		}
		
		
		/* Render gui */
		this.entities.gui.render(this.context);
		//this.display();
	}

}