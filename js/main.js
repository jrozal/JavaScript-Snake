import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

// function main takes in current time and renders game indefinitely
function main(currentTime) {
  if (gameOver) {
    if (confirm('Game over. Click OK to restart.')) {
      window.location.reload();
    }

    return;
  }
  // request next frame to animate game
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  // update render time
  lastRenderTime = currentTime;

  update();
  draw();
};

// init game render loop
window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
};

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
};

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
};