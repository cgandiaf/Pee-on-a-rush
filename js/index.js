window.onload = function () {

    var game = new Game();
    game.start();
    document.getElementById("canvas").onclick = function (event) {
       console.log(event);
        
    };

};