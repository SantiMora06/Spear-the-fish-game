# Spear the Fish!

[Eager to spearfishing? Click here!](https://santimora06.github.io/Spear-the-fish-game/index.html)

## Description

:trident: Spear the Fish! is a game where you need to avoid the threats of sea creatures and try to catch different fishes. The game ends either when you run out of lifes or when you get a certain amount of points. After the game ends, you'll see your future depending on the reason of the ending :wink:.

 
## MVP

- The game has one player and three different fishes and two different threats, split on sharks and jellyfishes.
- The player moves up, down, right or left using "W" or :arrow_up: ; "S" or :arrow_down:; "D" or :arrow_right: ; or "A" or :arrow_left: ;
- Threats and fishes will appear randomly on the screen with different widhts and heights.
- The player starts going down diagonally how it is in real life;
- The game difficulty remains the same because of the unpredictable behaviour of the threats. It can cause the lack of space for you to run away form them.
- The game ends when you loose 3 lives :broken_heart: or you get up to :100: points. There is no time limit.

## Backlog

- Add more fishes with different scores.
- Add threats that doesn't kill you but takes points from the score.
- Increase speed of the threats and fishes depending on the score.
- Creating an infinite mode where you will challenge yourself.
- Create a High-Scores to track locally the score and player's name. :merman:
- Add more images on fish info.
- Add a big threat every "x" points, as a Megalodon or a whalekiller.
- Make the threats and fishes appear more split, not one on the other.


## Technologies used

- HTML
- CSS
- JavaScript
- JS Classes
- JS Audio() and JS Image()
- DOM Manipulation


## States and transitions

- Start screen
- Game screen
- Gameover screen
- Gamewin screen
- Fish info screen


## Data Structure

### index.js

- startGame();
- restartGame();

### game.js

- this.introScreen;
- this.gameScreen;
- this.gameEndScreen;
- this.stats;
- this.gameContainer;
- this.height;
- this.width;
- this.fishes;
- this.threats;
- this.score;
- this.lives;
- this.gameIsOver;
- this.gameIntervalId;
- this.gameLoopFrequency;

-  start();
- gameLoop();
- update();
- endGame();
- endGameWin();
- restartGame();

### player.js

- move();
- didCollideWithFish(fish);
- didCollideWithThreat(threat);
- updatePosition();

### background.js

- this.gameScreen;
- this.left;
- this.top;
- this.width;
- this.height;
- this.element;

### fishes.js

- this.gameScreen;
- this.left;
- this.top;
- this.width;
- this.height;
- this.element;
- this.score;

- updatePosition();
- move();

### threats.js

- this.gameScreen;
- this.left;
- this.top;
- this.width;
- this.height;
- this.element;

- updatePosition();
- move();

### info.js

- showFishesInfo();
- nextPageFishesInfo();
- restartGame();


## Links

### [Trello Link](https://trello.com)

### [Slides Link](http://slides.com)

### [Github repository Link](https://github.com/SantiMora06/Spear-the-fish-game)

### [Deployment Link](https://santimora06.github.io/Spear-the-fish-game/index.html)