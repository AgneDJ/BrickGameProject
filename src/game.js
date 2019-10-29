import Paddle from "./paddle";
import InputHandler from "./input";
import Ball from "./ball.js";
import Bricks from "./bricks.js";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }
  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

    let bricks = [];
    for (let i=0; i<10; i++) {
      bricks.push(new Bricks(this, { x: i*52, y: 20 }));
    }
    this.gameObjects = [this.ball, this.paddle, ...bricks];

    new InputHandler(this.paddle);
  }
  update(deltaTime) {
    this.gameObjects.forEach(object => object.update(deltaTime));
  }

  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx));
  }
}
