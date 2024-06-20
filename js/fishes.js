class Fishes {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.left = 1800;
      this.top = Math.floor(Math.random() * 800 + 70);
      this.width = 90;
      this.height = 50;
      this.score = 0;
      this.element = document.createElement("img");
  
      this.element.src = "images/Vieja1.png";

      const randomFish = Math.random();
      if(randomFish <= 0.3){
        this.element = document.createElement("img")
        this.element.src = "images/Vieja1.png";
        this.score = 10;
      } else if (randomFish <= 0.6) {
        this.element = document.createElement("img")
        this.element.src = "images/download.png";
        this.width = 140;
        this.height = 60;
        this.score = 20;
      } else if (randomFish <= 0.8){
        this.element = document.createElement("img")
        this.element.src = "images/Bicuda.png";
        this.width = 160;
        this.height = 90;
        this.score = 30;
      } else {
        this.element = document.createElement("img")
        this.element.src = "images/turtle.png";
        this.width = 160;
        this.height = 90;
        this.score = -50;
      }
    
      this.element.style.position = "absolute";
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
  
      this.gameScreen.appendChild(this.element);
    }
  
    updatePosition() {
      // We update the fishe's position based on how far from the left or top
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    move() {
      // Move the fish down, right, up, left
      this.left -= 3;

  
      // Update the player's fish position on the screen
      this.updatePosition();
    }

  }
  
