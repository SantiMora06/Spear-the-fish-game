class Threats {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      this.left = 600;
      this.top = Math.random;
      this.width = 250;
      this.height = 150;
      this.element = document.createElement("img");
  
      this.element.src = "/images/shark.png";
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
      // The threat needs to move
      this.top += 0;
      this.left -= 4;
      // We need to update the fishes position on the game Screen
      this.updatePosition();
    }
  }
  