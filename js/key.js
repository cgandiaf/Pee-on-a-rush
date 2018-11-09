function Key (game){
    this.game = game;
    this.imgKey = new Image;
    this.imgKey.src = "images/key.png";

    this.x = 300;//Math.random() * 1500;
    this.y = 300;//Math.random() * 100;

    this.width = this.imgKey.width * 0.2; //CANVAS
    this.height = this.imgKey.height * 0.2; //CANVAS

}
Key.prototype.drawKey = function(){
    this.imgKey.src = "images/key.png";
    this.game.ctx.drawImage(this.imgKey  ,this.x - this.game.player.x ,this.y,this.width,this.height);
}
Key.prototype.drawKeyOn = function(){
    this.imgKey.src = "images/keyOn.png";
    this.game.ctx.drawImage(this.imgKey  ,this.x - this.game.player.x ,this.y,this.width,this.height);
}



