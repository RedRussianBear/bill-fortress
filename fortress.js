var STATE = {};
STATE.NULL = 0;
STATE.START = 1;
STATE.OVERWORLD = 2;
STATE.DEBATE = 3;
STATE.MAKECHAR = 4;

var FONT = "Franklin Gothic Medium";

function Fortress(canvas) {
    
    /* Super constructor and superclass reference. */
	Engine.call(this, canvas);
    var superclass = new Engine();
	
	this.entities.gui = new GUI(this);
    this.state = STATE.START;
	this.context.textBaseline = "top";
	
	/* Build Start menu */
	var startm = this.entities.gui.addComponent("start", new Component(0, 0, this.canvas.width, this.canvas.height, this, this.entities.gui, "none"));
	startm.addChild(new Text(this.canvas.width/2, 200, startm, "Bill Fortress", "black", "36px " + FONT, "center"));
	startm.addChild(new Text(this.canvas.width/2, 240, startm, "A game of legislation", "black", "24px " + FONT, "center"));
	startm.addChild(new Button(this.canvas.width/2 - 50, 300, 100, 40, startm, "New Game", function(){engine.state = STATE.OVERWORLD;}, function(){return true;}));
	startm.addChild(new InputField(this.canvas.width/2 - 100, 400, 200, 20, startm));
	
	/* Update loop. */
    this.update = function(delta) {
		/* Update GUI */
		this.entities.gui.update();
		
		/* Update input. */
		this.input.update(delta);
	}
	
    /* Render. */
	this.render = function(delta) {
        /* Clear. */
        this.context.fillStyle = "white";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		
		/* Render GUI */
		this.entities.gui.render(this.context);
		
		switch(this.state)
		{
			case(STATE.START):
				break;

			case(STATE.OVERWORLD):
				break;

			case(STATE.DEBATE):
				break;
		}
	}

}