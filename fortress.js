/** States. */
var STATE = {};
STATE.NULL = 0;
STATE.START = 1;
STATE.PAUSE = 2;
STATE.OVERWORLD = 3;
STATE.DEBATE = 4;
STATE.CHARACTER = 5;

/* Global font. */
var FONT = "Franklin Gothic Medium";

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
		
		/* Create world */
		this.entities.world = new world.World(engine);
		//this.entities.world.loadLevel("levels/test.lvl");
		
		/* Load resources */
		this.resources.queue("billsprite", resource.IMAGE, "sprites/bill/West/frame1.png");
		this.resources.queue("tile", resource.IMAGE, "tiles/walkable.png");
		var that = this;
		this.resources.load(function() {
			that.entities.player.img = that.resources.$("billsprite");
			console.log("Loaded reources");
		});
	
	    /* Create the start menu. */
	    var menu = this.entities.gui.adopt("start", new gui.Component(this, 0, 0, this.canvas.width, this.canvas.height, {})); 
	    
	    /* Some graphical interface components. */
	    menu.adopt("title", new gui.Text(
	        this, this.canvas.width/2, 200, "Bill Fortress", {base: {font: "60px Verdana"}}
	    ));
	    menu.adopt("tagline", new gui.Text(
	        this, this.canvas.width/2, 250, "A game of legislation", {base: {font: "30px Verdana"}}
	    ));
	    menu.adopt("start", new gui.Button(
	        this, this.canvas.width/2 - 150, 380, 300, 40, "New Game", function() { this.parent.state = gui.STATE.DISABLED; this.parent.visible = false; this.parent.engine.state = STATE.OVERWORLD; }
	    ));

		
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
		}
	}
	
    /* Render. */
	this.render = function(delta) {
	
        /* Clear. */
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		this.entities.gui.render(this.context);

        
		/* Rendering states. */
		switch (this.state) {
		
		    /* Start menu. */
			case STATE.START:
				break;

			/* Overworld */
			case STATE.OVERWORLD:
				this.entities.world.render(this.context, this.entities.player.x, this.entities.player.y);
				this.entities.player.render(this.context);
				break;
		}
	
	}

}