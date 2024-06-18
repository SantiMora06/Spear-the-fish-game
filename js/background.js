class Background {
    constructor(gameScreen, left, top, width, height, images) {
      this.gameScreen = gameScreen;
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height;
      this.element = document.createElement("img");

      this.element.src = images;
      this.element.style.position = "";
      this.element.style.display = "flex"
      this.element.style.width = `${width}%`;
      this.element.style.height = `${height}%`;
      this.element.style.left = `${left}px`;
      this.element.style.top = `${top}px`;
;
      this.gameScreen.appendChild(this.element);
    }
}