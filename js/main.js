let lastRenderTime = 0;

// function main takes in current time and renders game indefinitely
function main(currentTime) {
  // request next frame to animate game
  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  console.log('Render');
  // update render time
  lastRenderTime = currentTime;
};

// init game render loop
window.requestAnimationFrame(main);