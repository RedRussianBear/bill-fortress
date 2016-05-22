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
	
	this.entities.gui = this.gui = new GUI(this);
    this.state = STATE.START;
	this.context.textBaseline = "top";
	
	/* Build Start menu */
	var startm = this.gui.addComponent("start", new Component(this, 0, 0, this.canvas.width, this.canvas.height, "none"));
	startm.addChild(new Text(this.canvas.width/2, 200, "Bill Fortress", "black", "36px " + FONT, "center"));
	startm.addChild(new Text(this.canvas.width/2, 240, "A game of legislation", "black", "24px " + FONT, "center"));
	startm.addChild(new Button(this.canvas.width/2 - 50, 300, 100, 40, "New Game", function(){this.parent.engine.state = STATE.MAKECHAR; this.parent.gui.components.make.state = Component.ACTIVE; this.parent.state = Component.HIDDEN;}, function(){return true;}));
	startm.addChild(new InputField(this.canvas.width/2 - 100, 400, 200, 20));
	startm.state = Component.ACTIVE;
	
	/* Build Character Creation Menu */
	var makem = this.gui.addComponent("make", new Component(this, 0, 0, this.canvas.width, this.canvas.height, "none"));
	makem.addChild(new Text(this.canvas.width/2, 50, "Character Creation", "black", "36px " + FONT, "center"));
	
	
	/* Update loop. */
    this.update = function(delta) {
		/* Update GUI */
		this.gui.update();
		
		/* Update input. */
		this.input.update(delta);
	}
	
    /* Render. */
	this.render = function(delta) {
        /* Clear. */
        this.context.fillStyle = "white";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		
		/* Render GUI */
		this.gui.render(this.context);
		
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