function Fortress(canvas) {
    
    /* Super constructor and superclass reference. */
	Engine.call(this, canvas);
    var superclass = new Engine();
    
    /* Render. */
    this.render = function(delta) {
        
        /* Clear. */
        this.context.fillStyle = "white";
        this.context.fillRect(0, 0, 800, 600);
        
        /* Demo, draw the title. */
        this.context.fillStyle = "black";
        this.context.font = "36px Franklin Gothic Medium";
        this.context.textAlign = "center";
        this.context.fillText("Bill Fortress", 400, 200);
        this.context.font = "24px Franklin Gothic Medium";
        this.context.fillText("A game of legislation", 400, 240);
        this.context.font = "20px Franklin Gothic Medium";
        this.context.fillText("Click to begin", 400, 420); 
    }

}