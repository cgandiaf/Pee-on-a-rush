function Tutorial (game){
        this.game = game;
        //this.width = 800; //CANVAS
        //this.height = 600; //CANVAS
 
        this.imgTutorial = new Image();
        this.imgTutorial.src = "images/main.png";
        this.leftLimit = 684;
        this.rigthLimit = 872;

        //this.x = 400 - 40;
}

//Debería recibir por parámetro las posiciones del jugador y tengo mucho lio con los anchos de canvas, de imagen y de todo, pero va aceptable
Tutorial.prototype.showTutorial = function(){
    this.game.ctx.drawImage(this.imgTutorial, this.game.player.x - 1500, this.game.player.y, this.game.canvas.width, this.game.canvas.height, 0, 0, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.imgTutorial, this.game.player.x, this.game.player.y, this.game.canvas.width, this.game.canvas.height, 0, 0, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.imgTutorial, this.game.player.x + 1500, this.game.player.y, this.game.canvas.width, (this.game.canvas.height), 0, 0, this.game.canvas.width, this.game.canvas.height);
}
Tutorial.prototype.checkCollisionDoor = function () {

    return ((Math.abs(this.game.shadow.x + this.game.player.x)) >= this.leftLimit 
    && this.rigthLimit >= Math.abs(this.game.shadow.x + this.game.shadow.width + this.game.player.x))
}