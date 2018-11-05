rooms = [
    {
        name: "black",
        doors: [[174,362],[684,872],[1166,1354]]
    },
    {
        name: "yellow",
        doors: [[174,362],[684,872],[1166,1354]]
    },
    {
        name: "pink",
        doors: [[174,362],[684,872],[1166,1354]]
    },
    {
        name: "green",
        doors: [[174,362],[684,872],[1166,1354]]
    }
]


function Room(game, name, doors) {
    this.id = 
    this.game = game;

    this.imgBlack = new Image();
    this.imgBlack.src = "images/b3.png";
    this.width = 800;
    this.height = 600; //CANVAS

    // this.leftLimitYellow = 228;
    // this.rightLimitYellow = 416;
    
    // this.leftLimitPink = 953;
    // this.rightLimitPink = 1140;
    

    // this.numberOfRooms = 2;
    // this.positionOfRooms = 0;
}
Room.prototype.drawRoom = function () {
    this.game.ctx.drawImage(this.imgBlack, this.game.player.x-1500, this.game.player.y, this.width , (this.height), 0, 0, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.imgBlack, this.game.player.x, this.game.player.y, this.width , (this.height), 0, 0, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.imgBlack, this.game.player.x + 1500, this.game.player.y, this.width , (this.height), 0, 0, this.game.canvas.width, this.game.canvas.height);
    // this.game.ctx.beginPath();
    // this.game.ctx.lineWidth="2";
    // this.game.ctx.strokeStyle = "white";
    // this.game.ctx.rect(300, 300, 250, 200);
    // this.game.ctx.stroke();
}
Room.prototype.drawDoor = function(){
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillRect(400, 300-3, 30, 6);
    this.game.ctx.fillRect(300-3, 400, 6, 30);
}
