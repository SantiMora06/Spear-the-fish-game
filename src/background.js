class Background {
    constructor(gameScreen, left, top, width, height, images) {
      this.gameScreen = gameScreen;
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height;
      this.directionX = 0;
      this.directionY = 0;
      this.element = document.createElement("img");
      this.element1 = document.createElement("img")

      this.element1.src = images;
      this.element.src = images;
      this.element.style.position = "absolute";
      this.element.style.width = `${width}px`;
      this.element.style.height = `${height}px`;
      this.element.style.left = `${left}px`;
      this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.element1);
      this.gameScreen.appendChild(this.element);
    }
}