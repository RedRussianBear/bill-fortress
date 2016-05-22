/** Graphical interface sprites. */
var gui = {};

/** The basic interface component. */
gui.Component = function Component(engine, parent, x, y, w, h, style) {
    
    /** Instantiate sprite. */
    sprite.Sprite.call(this, x, y, w, h);
    
    /** Retain other members. */
    this.engine = engine;
    this.parent = parent;
    this.style = style;
    
    /** Instance. */
    this.visible = true;
    this.state = Component.NORMAL;
    this.children = {};
    
    /** Add a child to the component. */
    this.adopt = function(name, component) { this.children[name] = component; }
    
    /** Remove a child from the component. */
    this.remove = function(name) { name in this.children && delete this.children[name]; }
    
    /** Render the component. */
    this.render = function(context) {
        if (!this.visible) return;
        for (var name in this.children) this.children[name].render(context);
    }
    
    /** Update the component. */
    this.update = function(delta) {
        if (this.state == Component.DISABLED) return;
        for (var name in this.children) this.children[name].update(delta);
    }

}

/** Component relative transform and states. */
gui.Component.prototype = {
    get relative() { return this.parent.relative && this.transform.with(this.parent.relative) || this.transform; },
    DISABLED: 0, NORMAL: 1
}

/** Button component class. */
gui.Button = function Button(parent, x, y, w, h, text, mousedown) {
    
	/* Component superclass. */
	gui.Component.call(this, engine, parent, x, y, w, h);

    /** Specific to the button. */
    this.text = text;
    this.mousedown = typeof mousedown == "function" && mousedown || function() {};

	/* States and functions */
	this.state = Button.NORMAL;
	this.mousedown = mousedown;

	/* Draw Styling */
    this.style = {font: "20px Franklin Gothic Medium", textAlign: "center"};
	this.styles = {};
	this.styles[Button.DISABLED] = {box: {fillStyle: "gray", strokeStyle: "black"}, text: {fillStyle: "black"}};
	this.styles[Button.NORMAL] = {box: {fillStyle: "white", strokeStyle: "gray"}, text: {fillStyle: "black"}};
	this.styles[Button.HOVER] = {box: {fillStyle: "gray", strokeStyle: "black"}, text: {fillStyle: "black"}};
	
	/** Render button the button. */
	this.render = function(context) {

        /* Transform relative to parent. */
        var transform = this.relative;
        
        /* Save the state of the context. */
        context.save();
        
        /* Draw the box. */
        for (var key in this.styles.box) this.context[key] = this.styles.box[name];
		context.fillRect(transform.x, transform.y, this.width, this.height);
		context.strokeRect(transform.x, transform.y, this.width, this.height);
        
        /* Draw the text. */
        for (var key in this.styles.text) this.context[key] = this.styles.text[name];
		context.fillText(this.text, this.x + this.parent.x + this.textOffLeft, this.y + this.parent.y + this.textOffTop);
        
        /* Restore the context. */
        context.restore();
        
	}
	
    /** Update the button. */
	this.update = function(delta) {
		if(this.parent.engine.input.mouse.x > this.x && this.parent.engine.input.mouse.x < this.x + this.width &&
		this.parent.engine.input.mouse.y > this.y && this.parent.engine.input.mouse.y < this.y + this.height 
		&& this.state != Button.LOCKED) {
			this.state = Button.MOUSE_OVER;
			if(this.parent.engine.input.mouse.left)
				this.onPress();
		}
	}
}

/* Button state constants */
gui.Button.prototype.HOVER = 2;

function Text(x, y, parent, tex, style, font, align) {
	this.align = align;
	this.parent = parent;
	this.text = tex;
	this.font = font;
	this.style = style;
	this.x = x;
	this.y = y;
	
	this.render = function(context) {
		context.fillStyle = this.style;
		context.font = this.font;
		context.textAlign = this.align;
		context.fillText(this.text, this.x + this.parent.x, this.y + this.parent.y);
	}
}

function InputField(x, y, w, fontsize, parent) {
	/* Basic variables */
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = fontsize + 6;
	this.parent = parent;
	context = parent.context;
	
	/* State variables */
	this.state = InputField.CLEAR;
	this.text = "";
	this.maxChars = 16;
	
	/* Text format variables */
	this.font = fontsize + "px Franklin Gothic Medium";
	this.fontHeight = 20;
	this.align = "left";
	this.textOffTop = this.height/2 - this.fontHeight/2;
	this.textOffLeft = 3;
	
	/* Draw Styling */
	this.styles = [];
	this.styles[InputField.CLEAR] = {BOX: "white", BORDER: "gray", TEXT: "black"};
	this.styles[InputField.SELECTED] = {BOX: "gray", BORDER: "black", TEXT: "black"};
	
	this.render = function(context) {
		context.fillStyle = this.styles[this.state].BOX;
		context.fillRect(this.x + this.parent.x, this.y + this.parent.y, this.width, this.height);
		context.strokeStyle = this.styles[this.state].BORDER;
		context.strokeRect(this.x + this.parent.x, this.y + this.parent.y, this.width, this.height);
	
		context.font = this.font;
		context.textAlign = this.align;
		context.fillStyle = this.styles[this.state].TEXT;
		context.fillText(this.text, this.x + this.parent.x + this.textOffLeft, this.y + this.parent.y + this.textOffTop);
	}
	
	this.update = function() {
		if(this.state == InputField.SELECTED) {
			for(key in this.parent.engine.input.keyboard) {
				if(this.parent.engine.input.keyboard[key] == input.STATE.PRESSED) {
					if(key == input.KEY.BACK_SPACE)
						this.text = this.text.substring(0, this.text.length - 1);
					else if(key == input.KEY.ENTER || key == input.KEY.RETURN)
						this.state = InputField.CLEAR;
					else if(key >= input.KEY.A && key <= input.KEY.Z) {
						if(!(this.parent.engine.input.keyboard[input.KEY.SHIFT]))
							key = parseInt(key) + 32;
						this.text += String.fromCharCode(key);
					}
					else if(key == input.KEY.SPACE)
						this.text += " ";
				}
			}
		}
		
		if(this.parent.engine.input.mouse.left){
			if(this.parent.engine.input.mouse.x > this.x && this.parent.engine.input.mouse.x < this.x + this.width &&
			this.parent.engine.input.mouse.y > this.y && this.parent.engine.input.mouse.y < this.y + this.height) {
				this.state = InputField.SELECTED;
			}
			else {
				this.state = InputField.CLEAR;
			}
		}
	}
}

InputField.CLEAR = 0;
InputField.SELECTED = 1;

function GUI(engine) {
	this.engine = engine;
	this.components = {};
	
	this.addComponent = function(name, component) {
		this.components[name] = component;
		return component;
	}
	
	this.update = function() {
		
		for(comp in this.components) {
			var current = this.components[comp];

			if(current.state == Component.ACTIVE) {
				current.update();
			}
		}
	}
}