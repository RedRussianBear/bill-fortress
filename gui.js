
//general GUI Component class, used to house all other elements
function Component(x, y, w, h, engine, style) {
	//initialize fields
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.style = style;
	this.engine = engine;
	this.context = this.engine.context;
	this.state = Component.ACTIVE;
	
	this.children = [];
	
	//render function, draws self, and all child components
	this.render = function() {
		//Check if a special image has been assigned to this component
		if(this.image) {
			this.context.fillImage(this.x, this.y, this.image);
		}
		else {
			this.context.fillStyle = this.style;
			this.context.fillRect(this.x, this.y, this.width, this.height);
		}
		
		for(var i = 0; i < this.children.length; i++)
			this.children[i].render();
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

function Button(x, y, w, h, pater, tex, onPress) {
	/* Basic Variables */
	this.parent = pater;
	this.context = this.parent.context;
	this.width = w;
	this.height = h;
	this.x = x;
	this.y = y;
	this.text = tex;

	/* States and functions */
	this.state = Button.CLEAR;
	this.onPress = onPress;

	/* Draw Styling */
	this.styles = [];
	this.styles[Button.CLEAR] = {BOX: "white", BORDER: "gray", TEXT: "black"};
	this.styles[Button.MOUSE_OVER] = {BOX: "gray", BORDER: "black", TEXT: "black"};

	
	/* Text format variables */
	this.font = "20px Franklin Gothic Medium";
	this.fontHeight = 20;
	this.align = "left";
	this.textOffTop = this.height/2 - this.fontHeight/2;
	this.textOffLeft = 3;

	/* Render button */
	this.render = function() {
		this.context.fillStyle = this.styles[this.state].BOX;
		this.context.fillRect(this.x + this.parent.x, this.y + this.parent.y, this.width, this.height);
		this.context.strokeStyle = this.styles[this.state].BORDER;
		this.context.rect(this.x + this.parent.x, this.y + this.parent.y, this.width, this.height);
		this.context.stroke();
	
		this.context.font = this.font;
		this.context.textAlign = this.align;
		this.context.fillStyle = this.styles[this.state].TEXT;
		this.context.fillText(this.text, this.x + this.parent.x + this.textOffLeft, this.y + this.parent.y + this.textOffTop);
	}
	
	this.update = function() {
		this.state = Button.CLEAR;
		this.style = this.style_passive;
		
		if(this.parent.engine.input.mouse.x > this.x && this.parent.engine.input.mouse.x < this.x + this.width &&
		this.parent.engine.input.mouse.y > this.y && this.parent.engine.input.mouse.y < this.y + this.height) {
			this.state = Button.MOUSE_OVER;
			this.style = this.style_active;
			if(this.parent.engine.input.mouse.left && this.state != Button.LOCKED)
				this.onPress();
		}
	}
}

/* Button state constants */
Button.CLEAR = 0;
Button.MOUSE_OVER = 1;
Button.LOCKED = 2;

function Text(x, y, pater, tex, style, font, align) {
	this.align = align;
	this.parent = pater;
	this.context = this.parent.context;
	this.text = tex;
	this.font = font;
	this.style = style;
	this.x = x;
	this.y = y;
	
	this.render = function() {
		this.context.fillStyle = this.style;
		this.context.font = this.font;
		this.context.textAlign = this.align;
		this.context.fillText(this.text, this.x + this.parent.x, this.y + this.parent.y);
	}
}

function GUI(engine) {
	this.context = engine.context;
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