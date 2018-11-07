function LifeBar() {
    this.lifeBarCanvas = document.getElementById("lifeBar") 
    this.ctx = this.lifeBarCanvas.getContext("2d");
    
    this.x = 0; 
    this.y = 0; 
    this.width = 50;
    this.height = 600;

  }

  LifeBar.prototype.drawLifeBar = function () {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
};

function LifeUnit(lifeBar){
    this.lifeBar = lifeBar;
    this.x = 0; 
    this.y = 600;
    this.width = 50;
    this.height = 50;
}

LifeUnit.prototype.drawLifeUnit = function (){
    this.lifeBar.ctx.fillStyle = "yellow";
    this.lifeBar.ctx.fillRect(this.x, this.y, this.width, this.height);
}

