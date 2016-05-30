/** Graphical interface sprites. */
var gui = {};

/** Standard GUI states. */
gui.STATE = {};
gui.STATE.DISABLED = 0;
gui.STATE.NORMAL = 1;

/** Merge two dictionaries recursively. */
function merge(from, into) {
    for (var key in from) {
        if (key in into && into[key].constructor == Object && from[key].constructor == Object) merge(from[key], into[key]);
        else into[key] = from[key];
    }
}

/** The basic interface component. */
gui.Component = function Component(engine, x, y, w, h, style) {
    
    /** Instantiate sprite. */
    sprite.Sprite.call(this, x, y, w, h);
        
    /** Retain other members. */
    this.engine = engine;
    this.style = style;
    
    /** Instance. */
    this.parent;
    this.visible = false;
    this.state = gui.STATE.DISABLED;
    this.children = {};
    
    /** Add a child to the component. */
    this.adopt = function(name, component) { 
        component.parent = this;
        return this.children[name] = component; 
    }
    
    /** Remove a child from the component. */
    this.remove = function(name) { 
        component.parent = null;
        name in this.children && delete this.children[name]; 
    }
    
    /** Render the component. */
    this.render = function(context) {
        if (!this.visible) return;
		if(this.style.fillStyle) {
			context.fillStyle = this.style.fillStyle;
			context.fillRect(this.transform.x, this.transform.y, this.width, this.height);
		}
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
    get relative() { return this.parent && this.parent.relative && this.transform.with(this.parent.relative) || this.transform; },
}

/** Button component class. */
gui.Button = function Button(engine, x, y, w, h, text, callback, styles) {
    
	/* Component superclass. */
	gui.Component.call(this, engine, x, y, w, h);

    /** Specific to the button. */
    this.text = text;
    this.mousedown = typeof mousedown == "function" && mousedown || function() {};

	/* States and functions */
	this.state = gui.STATE.NORMAL;
	this.hover = false;
	this.callback = callback;	

	/* Draw Styling */
    this.styles = {
        base: {font: "20px bitfont", textAlign: "center", textBaseline: "middle", lineWidth: 1e-10},
        "$normal": {box: {fillStyle: "lightgray"}, text: {fillStyle: "black"}},
        "$disabled": {box: {fillStyle: "lightgray"}, text: {fillStyle: "gray"}},
        "$hover": {box: {fillStyle: "gray"}, text: {fillStyle: "black"}},
    };
    if (styles) merge(styles, this.styles);
	
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

        /* Get the position of the button. */
        var transform = this.relative;

	    /** Check hover and click. */
	    if (geometry.Vector.inside(this.engine.input.mouse, transform, this.width, this.height) && this.state != gui.Button.DISABLED) {
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

/** A static text element. */
gui.Text = function Text(engine, x, y, text, styles) {

    /* Component superclass. */
    gui.Component.call(this, engine, x, y);
    
    /* Instance. */
    this.text = text;
    this.styles = {base: {font: "20px bitfont", textAlign: "center", textBaseline: "middle", fillStyle: "white"}};
    if (styles) merge(styles, this.styles);

    /** Render the text. */	
	this.render = function(context) {
	
        /* Save the state of the context. */
        context.save();
        
        /* General styles. */
        for (var key in this.styles.base) context[key] = this.styles.base[key];
        
        /* Get the transform. */
        var transform = this.relative;
        
        /* Create the text. */
		context.fillText(this.text, transform.x, transform.y);
		
		/* Restore the context. */
		context.restore();
		
	}
	
}

gui.Text.prototype = gui.Component.prototype;


gui.InputField = function InputField(engine, x, y, w, h) {
	
	gui.Component.call(this, engine, x, y);
	
	/* Basic variables */
	this.width = w;
	this.height = h;
	
	
	/* State variables */
	this.state = gui.InputField.CLEAR;
	this.text = "";
	this.maxChars = 28;
	
	/* Text format variables */
	this.fontsize = this.height - 6;
	this.font = this.fontsize + "px bitfont";
	this.align = "left";
	this.textOffTop = this.height/2 - this.fontsize/2;
	this.textOffLeft = 3;
	
	/* Draw Styling */
	this.styles = [];
	this.styles[gui.InputField.CLEAR] = {BOX: "white", BORDER: "gray", TEXT: "black"};
	this.styles[gui.InputField.SELECTED] = {BOX: "gray", BORDER: "black", TEXT: "black"};
	
	this.render = function(context) {
		context.fillStyle = this.styles[this.state].BOX;
		context.fillRect(this.transform.position.x + this.parent.transform.position.x, this.transform.position.y + this.parent.transform.position.y, this.width, this.height);
		context.strokeStyle = this.styles[this.state].BORDER;
		context.strokeRect(this.transform.position.x + this.parent.transform.position.x, this.transform.position.y + this.parent.transform.position.y, this.width, this.height);
	
		context.font = this.font;
		context.textAlign = this.align;
		context.fillStyle = this.styles[this.state].TEXT;
		context.textBaseline = "top";
		context.fillText(this.text, this.transform.position.x + this.parent.transform.position.x + this.textOffLeft, this.transform.position.y + this.parent.transform.position.y + this.textOffTop);
	}
	
	this.update = function() {
		if(this.state == gui.InputField.SELECTED) {
			for(key in this.parent.engine.input.keyboard) {
				if(this.parent.engine.input.keyboard[key] == input.STATE.PRESSED) {
					if(key == input.KEY.BACK_SPACE)
						this.text = this.text.substring(0, this.text.length - 1);
					else if(key == input.KEY.ENTER || key == input.KEY.RETURN)
						this.state = gui.InputField.CLEAR;
					else if(key >= input.KEY.A && key <= input.KEY.Z && this.text.length < this.maxChars) {
						if(!(this.parent.engine.input.keyboard[input.KEY.SHIFT]))
							key = parseInt(key) + 32;
						this.text += String.fromCharCode(key);
					}
					else if(key == input.KEY.SPACE && this.text.length < this.maxChars)
						this.text += " ";
				}
			}
		}
		
		if(this.parent.engine.input.mouse.left){
			if(this.parent.engine.input.mouse.x > this.transform.position.x && this.parent.engine.input.mouse.x < this.transform.position.x + this.width &&
			this.parent.engine.input.mouse.y > this.transform.position.y && this.parent.engine.input.mouse.y < this.transform.position.y + this.height) {
				this.state = gui.InputField.SELECTED;
			}
			else {
				this.state = gui.InputField.CLEAR;
			}
		}
	}
}

gui.InputField.CLEAR = 0;
gui.InputField.SELECTED = 1;

/** The main GUI manager. */
gui.Manager = function Manager(engine) {

    /* Store the engine and children. */
	this.engine = engine;
	this.children = {};
	
    /** Add a child to the component. */
    this.adopt = function(name, child) { 
        child.parent = this;
        return this.children[name] = child; 
    }
    
    /** Remove a child from the component. */
    this.remove = function(name) { 
        name in this.children && delete this.children[name]; 
    }

    /** Render the component. */
    this.render = function(context) { for (var name in this.children) this.children[name].render(context); }
    
	/** Update the GUI manager. */
	this.update = function(delta) { for (var name in this.children) this.children[name].update(delta); }

}