
/* GUI Component class, used to house all other elements */
function Component(engine, x, y, w, h, style) {
	/* Sprite super constructor */
	sprite.Sprite.call(this, x, y, w, h);
	
	this.style = style;
	this.engine = engine;
	this.state = Component.HIDDEN;
	
	this.children = [];
	
	/* Render function, draws self and all child components */
	this.render = function(context) {
		this.engine.context.fillStyle = this.style;
		this.engine.context.fillRect(this.transform.position.x, this.transform.position.y, this.width, this.height);
		
		for(var i = 0; i < this.children.length; i++)
			this.children[i].render(context);
	}
	
	this.addChild = function(child) {
		this.children.push(child);
		child.parent = this;
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

function Button(x, y, w, h, text, onPress, isUnlocked) {
	/* Sprite super constructor */
	sprite.Sprite.call(this, x, y, w, h);

	/* Basic Variables */
	this.text = text;

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
		context.fillRect(this.transform.position.x + this.parent.transform.position.x, this.transform.position.y + this.parent.transform.position.y, this.width, this.height);
		context.strokeStyle = this.styles[this.state].BORDER;
		context.strokeRect(this.transform.position.x + this.parent.transform.position.x, this.transform.position.y + this.parent.transform.position.y, this.width, this.height);
	
		context.font = this.font;
		context.textAlign = this.align;
		context.fillStyle = this.styles[this.state].TEXT;
		context.fillText(this.text, this.transform.position.x + this.parent.transform.position.x + this.textOffLeft, this.transform.position.y + this.parent.transform.position.y + this.textOffTop);
	}
	
	this.update = function() {
		if(this.isUnlocked())
			this.state = Button.CLEAR;
		else
			this.state = Button.LOCKED;
		
		if(this.parent.engine.input.mouse.x > this.transform.position.x && this.parent.engine.input.mouse.x < this.transform.position.x + this.width &&
		this.parent.engine.input.mouse.y > this.transform.position.y && this.parent.engine.input.mouse.y < this.transform.position.y + this.height 
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

function Text(x, y, text, style, font, align) {
	/* Sprite super constructor */
	sprite.Sprite.call(this, x, y);
	
	this.align = align;
	this.text = text;
	this.font = font;
	this.style = style;

	this.render = function(context) {
		context.fillStyle = this.style;
		context.font = this.font;
		context.textAlign = this.align;
		context.fillText(this.text, this.transform.position.x + this.parent.transform.position.x, this.transform.position.y + this.parent.transform.position.y);
	}
}

function InputField(x, y, w, fontsize) {
	/* Sprite super constructor */
	sprite.Sprite.call(this, x, y, w, fontsize + 6);

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
		context.fillRect(this.transform.position.x + this.parent.transform.position.x, this.transform.position.y + this.parent.transform.position.y, this.width, this.height);
		context.strokeStyle = this.styles[this.state].BORDER;
		context.strokeRect(this.transform.position.x + this.parent.transform.position.x, this.transform.position.y + this.parent.transform.position.y, this.width, this.height);
	
		context.font = this.font;
		context.textAlign = this.align;
		context.fillStyle = this.styles[this.state].TEXT;
		context.fillText(this.text, this.transform.position.x + this.parent.transform.position.x + this.textOffLeft, this.transform.position.y + this.parent.transform.position.y + this.textOffTop);
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
			if(this.parent.engine.input.mouse.x > this.transform.position.x && this.parent.engine.input.mouse.x < this.transform.position.x + this.width &&
			this.parent.engine.input.mouse.y > this.transform.position.y && this.parent.engine.input.mouse.y < this.transform.position.y + this.height) {
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
		component.gui = this;
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
					//console.log("rendering " + comp);
					current.render(context);
			}
		}
	}
}