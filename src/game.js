class Game {
    constructor() {
      this.introScreen = document.getElementById("game-intro-screen");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end-screen");
      this.player = new Player(
        this.gameScreen, 
        30,
        30,
        150,
        90,
        "/images/spearfisher1.png"
      );
     this.background = new Background (this.gameScreen, 250, 100, 1100, 700, 
        "/images/depositphotos_117388182-stock-photo-underwater-sea-ocean-with-light.webp")

        // These are the dimensions for the gameScreen
      this.height = 700;
      this.width = 1120;
      this.obstacles = [];
      this.score = 0;
      this.lives = 3;

      this.gameIsOver = false;
      this.gameIntervalId = 120;
      this.gameLoopFrequency = Math.round(1000/60); // 60fps
    }

  
    start() {
      // Set the height and width of the game screen
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
  
      // Hide the start screen
      this.introScreen.style.display = "none";
      // Show the game screen
      this.gameScreen.style.display = "block";

    

  
    // Executes the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
      this.gameIntervalId = setInterval(() => {
        this.gameLoop()
      }, this.gameLoopFrequency)

    }
    gameLoop() {
      console.log("in the game loop");
  
      this.update();
      
      if (this.gameIsOver) {
        clearInterval(this.gameIntervalId)
      }
    }

  
    update() {
      this.player.move();
  
      // Check for collision and if an obstacle is still on the screen
      for (let i = 0; i < this.obstacles.length; i++) {
        const obstacle = this.obstacles[i];
        obstacle.move();
  
        // If the player's car collides with an obstacle
        if (this.player.didCollide(obstacle)) {
          // Remove the obstacle element from the DOM
          obstacle.element.remove();
          // Remove obstacle object from the array
          this.obstacles.splice(i, 1);
          // Reduce player's lives by 1
          this.lives--;
          // Update the counter variable to account for the removed obstacle
          i--;
        } // If the obstacle is off the screen (at the bottom)
        else if (obstacle.top > this.height) {
          // Increase the score by 1
          this.score++;
          // Remove the obstacle from the DOM
          obstacle.element.remove();
          // Remove obstacle object from the array
          this.obstacles.splice(i, 1);
          // Update the counter variable to account for the removed obstacle
          i--;
        }
      }
  
      // If the lives are 0, end the game
      if (this.lives === 0) {
        this.endGame();
      }
  
      // Create a new obstacle based on a random probability
      // when there is no other obstacles on the screen
      //if (Math.random() > 0.98 && this.obstacles.length < 1) {
        //this.obstacles.push(new Obstacle(this.gameScreen));
      //}
    }
  
    // Create a new method responsible for ending the game
    endGame() {
      this.player.element.remove();
      this.obstacles.forEach(function (obstacle) {
        obstacle.element.remove();
      });
  
      this.gameIsOver = true;
      // Hide game screen
      this.gameScreen.style.display = "none";
      // Show end game screen
      this.gameEndScreen.style.display = "block";
    }
}

