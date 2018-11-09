function Tutorial (game){
        this.game = game;
        //this.width = 800; //CANVAS
        //this.height = 600; //CANVAS
 
        this.imgTutorial = new Image();
        this.imgTutorial.src = "images/tutorial.png";
        this.leftLimit = 710;
        this.rigthLimit = 900;

        //this.x = 400 - 40;
}

//Debería recibir por parámetro las posiciones del jugador y tengo mucho lio con los anchos de canvas, de imagen y de todo, pero va aceptable
Tutorial.prototype.showTutorial = function(){
    this.game.ctx.drawImage(this.imgTutorial, this.game.player.x - 1500, this.game.player.y, this.game.canvas.width, this.game.canvas.height, 0, 0, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.imgTutorial, this.game.player.x, this.game.player.y, this.game.canvas.width, this.game.canvas.height, 0, 0, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.imgTutorial, this.game.player.x + 1500, this.game.player.y, this.game.canvas.width, (this.game.canvas.height), 0, 0, this.game.canvas.width, this.game.canvas.height);
}
Tutorial.prototype.checkCollisionDoor = function () {

    if (this.game.player.x > 0){
        return (this.game.player.x + this.game.shadow.x) >= this.leftLimit 
        && (this.game.player.x + this.game.shadow.x + this.game.shadow.imgShadow.width/2) <= this.rigthLimit 
    }else {
        return Math.abs(this.game.player.x + this.game.shadow.x) >= this.leftLimit 
        && Math.abs(this.game.player.x + this.game.shadow.x + this.game.shadow.imgShadow.width/2) <= this.rigthLimit 
    }
    

    // return (this.game.shadow.x + this.game.player.x) >= this.leftLimit 
    // && this.rigthLimit >= (this.game.shadow.x + this.game.shadow.width + this.game.player.x)
}