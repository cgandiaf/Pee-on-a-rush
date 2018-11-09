function GameOver(game){
    this.game = game;
    this.img = new Image();
    
    //this.img.frames = 5;
    //this.img.frameIndex = 0;
    this.showGameOver();
    this.fps = 60; //Tambien lo puedo coger de game
    //this.srcArray = []
    this.frameCounter = 0;
    this.frameFinal = 30;
}

GameOver.prototype.showGameOver = function () {
    this.game.stop();
    //debugger
    this.game.clear();

    //this.drawGameOver();
    document.querySelectorAll("canvas").forEach(function(canvas){
      canvas.classList.add("off");
    })
    document.querySelector(".gameOver").classList.remove("off");
    document.querySelector("button").classList.remove("off");
  
  };
  // GameOver.prototype.drawGameOver = function () {
  //   this.frameCounter++;
    
  //     setInterval(function(){
  //       //

  //       if (this.framesCounter % 10 === 0) {
  //       this.img.src= `images/gifGameOver/${this.frameCounter}.gif`;
  //       this.game.ctx.drawImage(this.img,0,0);
  //       this.frameFinal--;
  //       //debugger
  //       }

  //       if(this.frameFinal === 0) clearInterval();

  //     }.bind(this), 1000 / this.fps);
      
  // }

  // GameOver.prototype.animateImg = function() {
  //   // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
  //   if (this.game.framesCounter % 6 === 0) {
  //     this.img.frameIndex += 1;
  
  //     // Si el frame es el último, se vuelve al primero
  //     if (this.img.frameIndex > 4) this.img.frameIndex = 0;
  //   }
  // };