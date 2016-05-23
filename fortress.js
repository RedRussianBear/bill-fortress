var STATE = {};
STATE.NULL = 0;
STATE.START = 1;
STATE.PAUSE = 2;
STATE.OVERWORLD = 3;
STATE.DEBATE = 4;
STATE.CHARACTER = 5;

var FONT = "Franklin Gothic Medium";

/** The Bill Fortress game engine. */
function Fortress(canvas) {
    
    /* Super constructor and superclass reference. */
	Engine.call(this, canvas);
    var superclass = new Engine();
	
	/** Create the main menu. */
	this.entities.gui = new gui.Manager(this);
    this.state = STATE.START;
    	
	/* Build Start menu */
	this.setup = function() {
	
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
	        this, this.canvas.width/2 - 150, 380, 300, 40, "New Game", function() { console.log("start!"); }
	    ));

    }
    
	/* Update loop. */
    this.update = function(delta) {
    
		/* Update GUI. */
		if (this.state == STATE.START) this.entities.gui.update(delta);
		
		/* Update input. */
		this.input.update(delta);

	}
	
    /* Render. */
	this.render = function(delta) {
	
        /* Clear. */
        this.context.fillStyle = "white";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
		/* Rendering states. */
		switch (this.state) {
		
		    /* Start menu. */
			case STATE.START:
				this.entities.gui.render(this.context);
				break;

		}
	
	}

}