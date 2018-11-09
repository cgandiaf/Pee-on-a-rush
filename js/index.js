window.onload = function () {

    var game = new Game();
    game.start();
    document.querySelector("button").onclick = function (event) {
//QUITO LO Q HAY Y METO LOS CANVAS
        //game.clear();
        document.querySelectorAll("img").forEach(function(img){
            img.classList.add("off");
        })
        
        document.querySelector("button").classList.add("off");
        document.querySelectorAll("canvas").forEach(function(canvas){
            canvas.classList.remove("off");
          })

        var game = new Game();
        game.start();  
    };

};