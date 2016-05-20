
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
	this.state = Component.HIDDEN;
	
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
	
	/*this.update = function() {
		for(var i = 0; i < this.children.length; i++) {
			if(this.children[i].)
		}
	}*/
}

Component.HIDDEN = 0;
Component.ACTIVE = 1;

//Button class: holds a function to use to check if the button is ready, and a function to execute on click
function Button(x, y, w, h, pater, tex, onPress, isReady, style, font) {
	this.parent = pater;
	this.text = tex;
	this.style = style;
	this.font = font;
	this.align = "center";
	this.context = this.parent.context;
	this.x = x + this.parent.x;
	this.y = y + this.parent.y;
	this.width = w;
	this.height = h;

	this.render = function() {
		this.context.fillStyle = this.style.box;
		this.context.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
		//this.context.fillStyle = this.style.border;
		//this.context.drawRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
		this.context.font = this.font;
		this.context.textAlign = this.align;
		this.context.fillStyle = this.style.text;
		this.context.fillText(this.text, this.x, this.y + this.height/2)
	}
	
	this.onClick = function() {
		if(this.isReady())
			this.onPress();
	}
}

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
		this.context.fillText(this.text, this.x, this.y);
	}
}

function GUI(engine) {
	this.context = engine.context;
	this.engine = engine;
	this.components = {};
	
	this.addComponent = function(name, component) {
		this.components[name] = component;
	}
	
	this.update = function() {
		if(this.engine.input.mouse.left == input.STATE.PRESSED)
			for(comp in components) {
				var current = this.components[comp];
				if(this.engine.input.mouse.x >= current.x && 
				this.engine.input.mouse.x <= current.x + current.width &&
				this.engine.input.mouse.y >= current.y &&
				this.engine.input.mouse.y <= current.y + current.height) {
					if(current.state == component.ACTIVE) {
						break;
					}
						
				}
			}
	}
}