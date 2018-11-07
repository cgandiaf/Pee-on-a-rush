function LifeBar(game) {
    this.game = game; //No hace falta si no le meto las vibraciones al canvas general
    this.lifeBarCanvas = document.getElementById("lifeBar") 
    this.ctx = this.lifeBarCanvas.getContext("2d");
    
    this.x = 0; 
    this.y = 0; 
    this.width = 50;
    this.height = 600;

  }

  LifeBar.prototype.drawLifeBar = function (time) {
        this.ctx.clearRect(0, 0, this.lifeBarCanvas.width, this.lifeBarCanvas.height);
        this.ctx.fillStyle = "yellow";
        console.log(time);
      
    if(time >= 90){
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        if (time % 2 === 0) this.game.ctx.fillRect(0,0, this.game.canvas.width, this.game.canvas.height)
        this.ctx.fillStyle = "red";
    }else if(time >= 80) {
         this.ctx.fillStyle = "red";
    }else if(time >= 60){
        this.ctx.fillStyle = "orange";
    }
    // }else if (time >= 90) {
    //     this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    //     if (90 % 2 === 0) this.game.ctx.fillRect(0,0, this.game.canvas.width, this.game.canvas.height)
    //     this.ctx.fillStyle = "red";
    //     this.game.ctx.fillRect(0,0, this.game.canvas.width, this.game.canvas.height)
    // }

    
    this.ctx.fillRect(this.x, this.height - this.height * (time/100), this.width, this.height * (time/100));
  
};

