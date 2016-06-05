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

atmosphere.BackgroundPlaylist = function BackgroundPlaylist(engine, sounds) {
    
    this.engine = engine;
    this.index = -1;
    this.songs = [];
    
    for (var i = 0; i < sounds.length; i++) {
        this.songs.push(this.engine.resources.$(sounds[i]));
    }
    
    var that = this;
    
    this.callback = function() {
        that.index = (that.index + 1) % that.songs.length;
        that.songs.onended = function() { console.log("song ended"); that.callback(); }
        that.songs[that.index].volume = 0.25;
        that.songs[that.index].play();
    }
    
    this.callback();
    
    this.pause = function() { this.songs[this.index].pause(); }
    this.play = function() { this.songs[this.index].play(); }
    
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
            if (this.triggers[i].update) this.triggers[i].update(delta);
        }
    }
    
}