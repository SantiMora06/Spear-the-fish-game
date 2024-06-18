class Game { // We create the Game class, no arguments in the constructor but introScreen, gameScreen, gameEndScreen as the first parameters;
    constructor() { // we define that this player will be a new player, the new player will apper in the gameScreen, 
        //and located 30px from the top and 30px from the left; It will have a height of 150px and 90px of width; Also the image that will be display is the spearfisher in this case;
        this.introScreen = document.getElementById("game-intro-screen");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end-screen");
        this.stats = document.getElementById("stats");
        this.gameContainer = document.getElementById("game-container");
        this.soundWater = document.getElementById("waterSound");
        this.player = new Player(
            this.gameScreen,
            100,
            60,
            250,
            150,
            "images/spearfisher1.png"
        );
        this.background = new Background(this.gameScreen, 0, 0, 100, 100,
            "images/depositphotos_117388182-stock-photo-underwater-sea-ocean-with-light.webp")


        // These are the dimensions for the gameScreen
        this.height = 100;
        this.width = 100;
        this.fishes = [];// These will be the fishes that will be displayed on the gameScreen
        this.threats = []; // These will be the threats that will be displayed on the gameScreen
        this.score = 0;
        this.lives = 3;
        this.gameContainer.style.display ="flex";

        this.gameIsOver = false;
        this.gameIntervalId = 120;
        this.gameLoopFrequency = Math.round(1000 / 60); // 60fps
    }


    start() { //When we start the game we set the height and the width of the gameScreen.
        // Set the height and width of the game screen
        this.gameScreen.style.height = `${this.height}vh`;
        this.gameScreen.style.width = `${this.width}vw`;

        // Also we hide the start screen
        this.introScreen.style.display = "none";
        // And we show the game screen
        this.gameScreen.style.display = "flex";
        this.gameEndScreen.style.display = 'none';
        this.stats.style.display ="flex";
        // Stop the sea sound
        // Play the heartbeat sound
        this.soundWater.pause();
    
    

        // Executes the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
        this.gameIntervalId = setInterval(() => {
            this.gameLoop()
        }, this.gameLoopFrequency)

    }
    gameLoop() {

        this.update();

        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId)
        }
    }


    update() { // ESTO HAY QUE CREARLO CON PECES Y AMENAZAS
        this.player.move();


        // Check for collision and if a fish is still on the screen
        for (let i = 0; i < this.fishes.length; i++) {
            const fish = this.fishes[i];
            fish.move();

            // If the spearfisher collides with a fish

            if (this.player.didCollideWithFish(fish)) { // 

                fish.element.remove(); // Remove the fish element from the DOM

                this.fishes.splice(i, 1)// Remove fish from the array

                this.score+=10; // Update the score

                this.fishes.push(new Fishes(this.gameScreen))

                this.threats.push(new Threats(this.gameScreen))

                i--; // Update the counter variable for the removed fishes

            }  
            if (fish.length <= 2) { // If the fish goes over the client width
                const newFish = new Fishes(this.gameScreen); // Create a new instance of the Fishes class
                this.fishes.push(newFish); // Add the new fish to the fishes array
              }

              if(fish.left < -200){
                fish.element.remove(); // Remove the fish element from the DOM

                this.fishes.splice(i, 1)

                i--; // Update the counter variable for the removed fishes
              }
            
        
            document.getElementById('score').innerText = this.score
        }

        for (let j = 0; j < this.threats.length; j++) {
            const threat = this.threats[j];
            threat.move();

            if (this.player.didCollideWithThreat(threat)) { // If the player get touch by a threat

                this.lives--; // Decrease one life

                threat.element.remove() // Remove the threat from the DOM

                this.threats.splice(j, 1) // Remove the threat from the array

                j--; // Update the counter variable for the removed threats
                this.threats.push(new Threats (this.gameScreen))

            } 
            if (this.threats.length <= 2) { // If the fish goes over the client width
                 // Add the new fish to the fishes array
                const newThreat = new Threats(this.gameScreen); // Create a new instance of the Fishes class
              this.threats.push(newThreat);
              }

              if(threat.left < -200){
                threat.element.remove(); // Remove the fish element from the DOM

                this.threats.splice(j, 1)

                j--; // Update the counter variable for the removed fishes
              }

            document.getElementById('lives').innerText = this.lives
        }


        // If you ran out of lives(0), end the game
        if (this.lives <= 0) {
            this.endGame();
        }

        if(this.score === 100){
            this.endGameWin()
        }

        // We create a new fish based on a random probability
        // when there is no other fish on the screen
      
        // We create a new threat based on a random probability
        // when there is no other fish on the screen

        if (Math.random() > 0.6 && this.threats.length <= 1) {
            this.threats.push(new Threats(this.gameScreen));
        }
        if (Math.random() > 0.8 && this.fishes.length <= 1) {
            this.fishes.push(new Fishes(this.gameScreen));
        }

        //We create a new threat when there is no other in the screen based on random
    }

    // We create a method to answer to the endGame.
    endGame() {
        this.player.element.remove(); //We remove the playerr
        this.fishes.forEach(function (fish) { //For each fish or threat, remove.
            fish.element.remove();
        });
        this.threats.forEach(function (threa) {
            threa.element.remove();
        })

        this.gameIsOver = true;
        // Hide game screen
        this.gameScreen.style.display = "none";
        this.gameContainer.style.display = "none";
        // Show end game screen
        this.gameEndScreen.style.display = "flex";
        
    }

    endGameWin() {
        this.player.element.remove(); //We remove the playerr
        this.fishes.forEach(function (fish) { //For each fish or threat, remove.
            fish.element.remove();
        });
        this.threats.forEach(function (threa) {
            threa.element.remove();
        })

        this.gameIsOver = true;
        // Hide game screen
        this.gameScreen.style.display = "none";
        this.gameContainer.style.display = "none";
        // Show end game screen
        this.gameEndScreen.style.display = "flex";
        document.getElementById("endScreenTitle").innerText = "You got an huge amount of fish... impresive"
        document.getElementById("endScreenPa").innerText = `Aqua"man" will miss its friends`
    
    }

    restartGame() {
        this.player.element.remove(); //We remove the playerr
        this.fishes.forEach(function (fish) { //For each fish or threat, remove.
            fish.element.remove();
        });
        this.threats.forEach(function (threa) {
            threa.element.remove();

            this.background.forEach(function (back) {
                back.element.remove();
            })
        })

        this.gameOver = false;

        this.gameScreen.style.display = "block"

        this.gameEndScreen.style.display = "none"

    }
}


