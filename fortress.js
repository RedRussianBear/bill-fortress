/** Global engine states. */
var STATE = {NULL: 0, START: 1, PAUSE: 2, OVERWORLD: 3, DEBATE: 4};

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
	    var menu = this.entities.gui.adopt("start", new gui.Component(this, this.entities.gui, 0, 0, this.canvas.width, this.canvas.height, {}));
	    var startbutton = new gui.Button(this, menu, this.canvas.width/2 - 150, 300, 300, 40, "New Game", function() { console.log(5); });
        menu.adopt("start", startbutton);
        
        //startm.addChild(new Text(this.canvas.width/2, 200, startm, "Bill Fortress", "black", "36px " + FONT, "center"));
        //startm.addChild(new Text(this.canvas.width/2, 240, startm, "A game of legislation", "black", "24px " + FONT, "center"));
        //startm.addChild(new InputField(200, 400, 200, 20, startm));
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

            /* Paused. */
            case STATE.PAUSED:
                break;
            
            /* Overworld. */
			case STATE.OVERWORLD:
				break;

            /* Debate battle. */
			case STATE.DEBATE:
				break;
		}
	}

}