var atmosphere = {};

atmosphere.ProximitySound = function ProximitySound(engine, x, y, r, sound) {
    
    this.engine = engine;
    this.pos = new geometry.Vector(x, y);
    this.r = r;
    this.sound = sound;
    this.on = true;
    
    this.update = function(delta) {
        
        if (this.on && geometry.Vector.distance(this.engine.entities.player.transform, this.pos) < this.r) {
            this.sound.play();
            this.on = false;
        }
    }

}

atmosphere.Manager = function Manager(engine) {
    
    /* Track the engine. */
    this.engine = engine;
    
    /** List of trigger events. */
    this.triggers = [];
    
    /** Add a trigger event. */
    this.add = function(trigger) {
        this.triggers.push(trigger);
    }
    
    /** Clear the atmosphere. */
    this.clear = function() {
        this.triggers = [];
    }
    
    /** Update the triggers. */
    this.update = function(delta) {
        for (var i = 0; i < this.triggers.length; i++) {
            this.triggers[i].update(delta);
        }
    }
    
}