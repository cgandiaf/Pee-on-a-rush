function Key (game){
    this.game = game;
    this.x = Math.random() * 1500;
    this.y = Math.random() * 150;
    this.width = 10; //CANVAS
    this.height = 10; //CANVAS

}
Key.prototype.drawKey = function(){
    this.game.ctx.fillStyle = "yellow";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
}


