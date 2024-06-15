window.addEventListener("load",() => {

const introScreen = document.getElementById("game-intro-screen")
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const fishesInfo = document.getElementById("more-info-button")
const gameContainer = document.getElementById("game-container")
const gameScreen = document.getElementById("game-screen")


let game;
  
startButton.addEventListener("click", startGame)
  
function startGame() {
      console.log("start game");
      game = new Game;
      game.start();
    }

    console.log(startButton)



restartButton.addEventListener("click", function () {
      // Call the restartGame function when the button is clicked
      restartGame();
    });
})