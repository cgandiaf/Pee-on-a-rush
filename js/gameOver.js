function GameOver(game){
    this.game = game;
    this.img = new Image();
    this.img.src= "images/sprite.png";
    this.img.frames = 5;
    this.img.frameIndex = 0;
    this.showGameOver();
    this.fps = 60; //Tambien lo puedo coger de game
}

GameOver.prototype.showGameOver = function () {
    this.game.stop();
    this.game.clear();
    this.drawGameOver();
    
    //this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
    //crear gif en el html
    //   setTimeout(function() {
    //     //limpiarlo
    // }, 2000);
    // this.start();
    //this.showTutorial()
  
  };
  GameOver.prototype.drawGameOver = function () {
      setInterval(function(){
        this.game.ctx.drawImage(
            this.img,
            this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
            0,
            Math.floor(this.img.width / this.img.frames),
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
          );
        
          this.animateImg();
      }.bind(this), 1000 / this.fps);
      clearInterval();
  }

  GameOver.prototype.animateImg = function() {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (this.game.framesCounter % 6 === 0) {
      this.img.frameIndex += 1;
  
      // Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > 4) this.img.frameIndex = 0;
    }
  };