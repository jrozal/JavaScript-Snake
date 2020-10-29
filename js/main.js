import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

// function main takes in current time and renders game indefinitely
function main(currentTime) {
  // request next frame to animate game
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  // update render time
  lastRenderTime = currentTime;

  update()
  draw()
};

// init game render loop
window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
};

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
};