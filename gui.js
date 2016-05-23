/** Graphical interface sprites. */
var gui = {};

/** Standard GUI states. */
gui.STATE = {};
gui.STATE.DISABLED = 0;
gui.STATE.NORMAL = 1;

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
    this.state = gui.STATE.NORMAL;
    this.children = {};
    
    /** Add a child to the component. */
    this.adopt = function(name, component) { return this.children[name] = component; }
    
    /** Remove a child from the component. */
    this.remove = function(name) { name in this.children && delete this.children[name]; }
    
    /** Render the component. */
    this.render = function(context) {
        if (!this.visible) return;
        for (var name in this.children) this.children[name].render(context);
    }
    
    /** Update the component. */
    this.update = function(delta) {
        if (this.state == gui.STATE.DISABLED) return;
        for (var name in this.children) this.children[name].update(delta);
    }

}

/** Component relative transform. */
gui.Component.prototype = {
    get relative() { return this.parent.relative && this.transform.with(this.parent.relative) || this.transform; },
}

/** Button component class. */
gui.Button = function Button(engine, parent, x, y, w, h, text, callback, styles) {
    
	/* Component superclass. */
	gui.Component.call(this, engine, parent, x, y, w, h);

    /** Specific to the button. */
    this.text = text;
    this.mousedown = typeof mousedown == "function" && mousedown || function() {};

	/* States and functions */
	this.state = gui.STATE.NORMAL;
	this.hover = false;
	this.callback = callback;	

	/* Draw Styling */
    this.styles = {
        base: {font: "20px Verdana", textAlign: "center", textBaseline: "middle", lineWidth: 1e-10},
        "$normal": {box: {fillStyle: "lightgray"}, text: {fillStyle: "black"}},
        "$disabled": {box: {fillStyle: "lightgray"}, text: {fillStyle: "gray"}},
        "$hover": {box: {fillStyle: "gray"}, text: {fillStyle: "black"}},
    }
	
	/** Render button the button. */
	this.render = function(context) {

        /* Transform relative to parent. */
        var transform = this.relative;
        
        /* Save the state of the context. */
        context.save();
        
        /* General styles. */
        for (var key in this.styles.base) context[key] = this.styles.base[key];
        
        /* Select a style mode. */
        var mode = "$disabled";
        if (this.hover) mode = "$hover";
        else if (this.state == gui.STATE.NORMAL) mode = "$normal";
                
        /* Draw the box. */
        for (var key in this.styles[mode].box) context[key] = this.styles[mode].box[key];
		context.fillRect(transform.x, transform.y, this.width, this.height);
		context.strokeRect(transform.x, transform.y, this.width, this.height);
        
        /* Draw the text. */
        for (var key in this.styles[mode].text) context[key] = this.styles[mode].text[key];
		context.fillText(this.text, transform.x + this.width / 2, transform.y + this.height / 2);
        
        /* Restore the context. */
        context.restore();
    
	}
	
    /** Update the button. */
	this.update = function(delta) {

        var transform = this.relative;

	    /** Check hover and click. */
	    if (geometry.Vector.inside(this.engine.input.mouse, transform.x, transform.y, this.width, this.height) && this.state != gui.Button.DISABLED) {
            this.hover = true;
			if (this.engine.input.mouse.left == input.STATE.PRESSED) this.callback();
		} else {
		    this.hover = false;
		    this.state = gui.STATE.NORMAL;
		}
	
	}
	
}

/* Inherit the prototype. */
gui.Button.prototype = gui.Component.prototype;

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

/** The main GUI manager. */
gui.Manager = function Manager(engine) {

    /* Store the engine and children. */
	this.engine = engine;
	this.children = {};
	
    /** Add a child to the component. */
    this.adopt = function(name, child) { return this.children[name] = child; }
    
    /** Remove a child from the component. */
    this.remove = function(name) { name in this.children && delete this.children[name]; }
	
    /** Render the component. */
    this.render = function(context) { for (var name in this.children) this.children[name].render(context); }
    
	/** Update the GUI manager. */
	this.update = function(delta) { for (var name in this.children) this.children[name].update(delta); }

}