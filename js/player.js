class Player {
    constructor(gameScreen, left, top, width, height, images) {
      this.gameScreen = gameScreen;
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height;
      this.directionX = 0;
      this.directionY = 0;
      this.element = document.createElement("img");
      
      this.element.src = images;
      this.element.style.position = "absolute";
      this.element.style.width = `${width}px`;
      this.element.style.height = `${height}px`;
      this.element.style.left = `${left}px`;
      this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
      // Update player's spearfisher position based on directionX and Y
      this.top += this.directionY;
      this.left += this.directionX;
  
      // We need to be sure that the spearfisher doesn't go away from the sea.
      if (this.left < 10) {
        this.left = 10;
      }
      if (this.top < 10) {
        this.top = 10;
      }
      if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
        this.left = this.gameScreen.offsetWidth - this.width - 10;
      }
      if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
        this.top = this.gameScreen.offsetHeight - this.height - 10;
      }
  
      // Update the spearfisher position
      this.updatePosition();
    }

   didCollideWithFish(fish) {
      const playerArea = this.element.getBoundingClientRect();
      
      const fishArea = fish.element.getBoundingClientRect();
  
      if ( // THIS NEEDS TO BE CHECKED
        playerArea.left < fishArea.right &&
        playerArea.right > fishArea.left &&
        playerArea.top < fishArea.bottom &&
        playerArea.bottom > fishArea.top
    ) {
        console.log("You got a fish!");
  
        return true;
      } else {
        return false
      }
    }

    didCollideWithThreat(threat) {
      const playerArea = this.element.getBoundingClientRect();
      
      const threatArea = threat.element.getBoundingClientRect();
  
      if (
        playerArea.left < threatArea.right &&
        playerArea.right > threatArea.left &&
        playerArea.top < threatArea.bottom &&
        playerArea.bottom > threatArea.top
      ) {
        console.log("A threat has reach you!");
  
        return true;
      } else {
        return false;
      }
    }

    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  } 