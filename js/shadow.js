function Shadow(game, name, doors) {
    this.game = game;
    this.x = 100;
    this.y = 200;
    //this.x = game.canvas.width/2 - this.width;
    //this.y = game.canvas.height/2;
    
    // this.height = 80;
    // this.name = name;
    // this.doors = doors;
    this.imgShadow = new Image(game);
    this.imgShadow.src = "images/s1.png"; //400px

    this.imgShadow.width = 256; 
    this.imgShadow.height = 715;

    // número de imágenes diferentes
    this.imgShadow.frames = 2;
    this.imgShadow.frameIndex = 0;
    this.width = this.imgShadow.width/this.imgShadow.frames;

}

Shadow.prototype.drawShadow = function () {
    this.imgShadow.src = "images/s1.png"; 
    this.game.ctx.drawImage(this.imgShadow,this.x,this.y);
//  console.log("dibuja sombra");
    
//     this.game.ctx.drawImage(
//         this.imgShadow,
//         0,//this.imgShadow.frameIndex * Math.floor(this.imgShadow.width / this.imgShadow.frames)+3,
//         0,
//         Math.floor(this.imgShadow.width / this.imgShadow.frames),
//         this.imgShadow.height,
//         this.x,//this.x, //CANVAS
//         this.y,//this.y, //CANVAS
//         this.width, 
//         this.imgShadow.height
//       );
};

Shadow.prototype.checkCollisionDoor = function (roomId) {

    var room = '';

    this.currentRoom = rooms.find(function (room) {
        return room.name === roomId
    }.bind(this));
    
    this.currentDoors = this.currentRoom.doors;

    //Cuando haya colisión devolver el número de la puerta donde ha ocurrido
    this.currentDoors.forEach(function (door, doorNumber) {
        //console.log(this.game.player.x + this.x + "mayor q left", this.game.player.x + this.x + this.width/2 + "menor q rigth")
        if(this.game.player.x > 0){
            if ((this.game.player.x + this.x) >= door.leftLimit 
                && door.rigthLimit >= this.game.player.x + this.x + this.width) 
                {
             room = doorNumber;
            }  
        } else {
            //.log("desplazamiento en negativo"+ this.game.player.x )
            if ((Math.abs(this.game.player.x + this.x )) >= 1500 - door.leftLimit 
        && door.rigthLimit >= Math.abs(this.x - this.width + this.game.player.x)) {
             room = doorNumber;
            }  
        }
    }.bind(this))

    return room;

};

// if (this.currentDoors.some(function (door, doorNumber) {
//     if ((Math.abs(this.x + this.game.player.x)) >= door.leftLimit &&
//         door.rigthLimit >= Math.abs(this.x + this.width + this.game.player.x)) {

//         return true
//     }
// }.bind(this))) return  


Shadow.prototype.drawShadowOn = function () {
    var w = 127;
    var h = 470;
    var y = 50;
    this.imgShadow.src = "images/s2.png"; 
    this.game.ctx.drawImage(this.imgShadow,this.x, y, w, h);
};

Shadow.prototype.checkCollisionKey = function (){
//console.log(this.game.player.x + this.x, "mayor q", this.game.key.x );
//console.log(this.game.key.x + this.game.key.width, "mayor q", this.game.player.x + this.x + this.width);
    return ((this.game.player.x + this.x + this.width) >= this.game.key.x 
        && (this.game.key.x + this.game.key.width) >= this.game.player.x + this.x)
         
}
