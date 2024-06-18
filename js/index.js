window.addEventListener("load",() => {

const introScreen = document.getElementById("game-intro-screen")
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const fishesInfo = document.getElementById("more-info-button")
const gameContainer = document.getElementById("game-container")
const gameScreen = document.getElementById("game-screen")
const stats = document.getElementById("stats")
const soundWater = document.getElementById("waterSound");
const heartbeat = document.getElementById("heartbeat1")

let game;
  
startButton.addEventListener("click", startGame)
  
function startGame() {
      console.log("start game");
      game = new Game;
      game.start();

    console.log(startButton)
}


restartButton.addEventListener("click", function() {
    restartGame()
})
    function restartGame() {
        location.reload();
      }
     

    document.addEventListener("keydown", event => {
        if (event.code === "KeyS" || event.code === "ArrowDown"){
            console.log("Letter S has been pressed")
            game.player.directionY = 2;
        }
        document.addEventListener("keydown", event => {
            if (event.code === "KeyA" || event.code === "ArrowLeft"){
                console.log("Letter A has been pressed")
                game.player.directionX = -2;
            }
        if (event.code === "KeyW" || event.code === "ArrowUp"){
            console.log("Letter W has been pressed")
            game.player.directionY = -2;
        }
        if (event.code === "KeyD" || event.code === "ArrowRight"){
            console.log("Letter D has been pressed")
            game.player.directionX = +2;
        }
    })
})

document.addEventListener("keyup", event => {
    if (event.code === "KeyS" || event.code === "ArrowDown"){
        console.log("Letter S has been released")
        game.player.directionY = 0;
    }
        if (event.code === "KeyA" || event.code === "ArrowLeft"){
            console.log("Letter A has been released")
            game.player.directionX = 0;
        }
    if (event.code === "KeyW" || event.code === "ArrowUp"){
        console.log("Letter W has been released")
        game.player.directionY = 0;
    }
    if (event.code === "KeyD" || event.code === "ArrowRight"){
        console.log("Letter D has been released")
        game.player.directionX = 0;
    }
})
})