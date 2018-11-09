var TOP_KEY = 38;
var DOWN_KEY = 40;
var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var SPACE = 32;



function Player(game) {
  this.game = game;
  this.x = 0;
  this.y = 0;
  this.v = 30;
  //this.vx = 0;
  this.setListeners();
  //w = 3
  //h = 3
  this.key = false;

};

///////INSTRUCCIONES DEL JUEGO

////TOP
//Go trhow
//

Player.prototype.setListeners = function () {
  document.onkeydown = function (event) {
    event.preventDefault();

    switch (event.keyCode) {

      case TOP_KEY:
        
        //GAME MODE
        if (this.game.gameMode === "tutorial" && this.game.tutorial.checkCollisionDoor()) {
          //Activamos modo juego e instanciamos room
          this.game.gameMode = "game"
          this.game.room = new Room(this.game);


        //GAME MODE
        } else {  
          //Actualización del contenido (key)-->se hace en player listener 

          //Comprueba la colisión y devuelve el número de la puerta donde hay colision  
          var doorNumber = this.game.shadow.checkCollisionDoor(this.game.room.roomId);

          if (this.game.room.roomId === "wc" && this.key) { //Si es el WC y tienes la llave WIN
            this.game.youWin();
          }

          if (typeof (doorNumber) === "number") { //Si es en otra room cambiamos escenario
            this.game.room.roomChange(doorNumber);
          }
        }

        break;

      case DOWN_KEY:

      if(this.game.shadow.checkCollisionKey()){
        this.key = true;

        rooms.find(function(room) {
          return room.name === "yellow";
        }).doors.unshift(wcDoor);


        rooms.find(function(room) {
          return room.name === "yellow";
        }).src = "images/yellowOn.png";

        console.log("Se supone q ya ha cambiado la imagen ");
        console.log(rooms.find(function(room) {
          return room.name === "yellow";
        }).src );
        console.log("hab amarilla entera ay pusheada");
        console.log(rooms.find(function(room) {
          return room.name === "yellow";
        }))

        //rooms.find(x => x.b === 6)
        // debugger
        // //Cambiar la imagen de yellow y añadir unshifear el baño
        // console.log(rooms.name["yellow"].doors.unshift(wcDoor));
        
      }
        break;

      case LEFT_KEY:
        //Actializa el movimiento del player
        this.x -= this.v;
        if (this.x < -1500) this.x = 0;
        break;

      case RIGHT_KEY:
        //Actializa el movimiento del player
        this.x += this.v;
        if (this.x > 1500) this.x = 0;
        break;
    }

  }.bind(this);
};

