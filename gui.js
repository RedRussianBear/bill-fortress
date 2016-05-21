
/* GUI Component class, used to house all other elements */
function Component(x, y, w, h, engine, gui, style) {
	//initialize fields
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.style = style;
	this.engine = engine;
	this.gui = gui;
	this.state = Component.ACTIVE;
	
	this.children = [];
	
	/* Render function, draws self and all child components */
	this.render = function(context) {
		this.engine.context.fillStyle = this.style;
		this.engine.context.fillRect(this.x, this.y, this.width, this.height);
		
		for(var i = 0; i < this.children.length; i++)
			this.children[i].render(context);
	}
	
	this.addChild = function(child) {
		this.children.push(child);
	}
	
	this.update = function() {
		for(var i = 0; i < this.children.length; i++) {
			var current = this.children[i];
			
			if(current.update)
				current.update();
		}
	}
}

/* Component state constants */
Component.HIDDEN = 0;
Component.ACTIVE = 1;

function Button(x, y, w, h, parent, tex, onPress, isUnlocked) {
	/* Basic Variables */
	this.parent = parent;
	this.width = w;
	this.height = h;
	this.x = x;
	this.y = y;
	this.text = tex;

	/* States and functions */
	this.state = Button.CLEAR;
	this.onPress = onPress;
	this.isUnlocked = isUnlocked;

	/* Draw Styling */
	this.styles = [];
	this.styles[Button.CLEAR] = {BOX: "white", BORDER: "gray", TEXT: "black"};
	this.styles[Button.MOUSE_OVER] = {BOX: "gray", BORDER: "black", TEXT: "black"};
	this.styles[Button.LOCKED] = {BOX: "gray", BORDER: "black", TEXT: "black"};
	
	/* Text format variables */
	this.font = "20px Franklin Gothic Medium";
	this.fontHeight = 20;
	this.align = "left";
	this.textOffTop = this.height/2 - this.fontHeight/2;
	this.textOffLeft = 3;

	/* Render button */
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
		if(this.isUnlocked())
			this.state = Button.CLEAR;
		else
			this.state = Button.LOCKED;
		
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
Button.CLEAR = 0;
Button.MOUSE_OVER = 1;
Button.LOCKED = 2;

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
	
	this.render = function(context) {
			for(comp in this.components) {
				var current = this.components[comp];
				if(current.state != Component.HIDDEN) {
					current.render(context);
			}
		}
	}
}