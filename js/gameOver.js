function GameOver(game){
    this.game = game;
    this.img = new Image();
    
    //this.img.frames = 5;
    //this.img.frameIndex = 0;
    this.showGameOver();
    this.fps = 60; //Tambien lo puedo coger de game
}

GameOver.prototype.showGameOver = function () {
    this.game.stop();
    //debugger
    this.game.clear();

    this.drawGameOver();
    this.frameCounter = 0;

    //debugger

    //this.cuerpo = document.getElementById("cuerpo");
    //this.cuerpo = document.createElement("IMG");

    //$('#gif').append().html('<img src = "https://media.giphy.com/media/26xBtzUkiEzHRxA3e/giphy.mp4"');
    
    //this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
    //crear gif en el html
    //   setTimeout(function() {
    //     //limpiarlo
    // }, 2000);
    // this.start();
    //this.showTutorial()
  
  };
  GameOver.prototype.drawGameOver = function () {

    debugger
      setInterval(function(){
        //${this.frameCounter}

        this.img.src= `images/gifGameOver/0.png`;
        this.game.ctx.drawImage(this.img,0,0);
        this.frameCounter++;

        if(this.frameCounter ===30) clearInterval();

        
        
      }.bind(this), 1000 / this.fps);
      
  }

  GameOver.prototype.animateImg = function() {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (this.game.framesCounter % 6 === 0) {
      this.img.frameIndex += 1;
  
      // Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > 4) this.img.frameIndex = 0;
    }
  };