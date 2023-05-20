const gameContainer = document.getElementById("game-container");
const gameWidth = gameContainer.clientWidth;
const gameHeight = gameContainer.clientHeight;

let canvas;
let ctx;
let mainPlayer = new Player(10, 30, 10, 10, "white");
let backElements = [];
let gameElements = [mainPlayer];

function initialize() {
  canvas = document.getElementById("game-canvas");
  canvas.width = gameWidth;
  canvas.height = gameHeight;

  ctx = canvas.getContext("2d");
  requestAnimationFrame(gameLoop);
}

function update() {
  for (const [key, value] of Object.entries(keys)) {
    if (value) {
      if (key === "ArrowRight") {
        mainPlayer.move(1, 0);
      }
      if (key === "ArrowLeft") {
        mainPlayer.move(-1, 0);
      }
      if (key === "ArrowDown") {
        mainPlayer.move(0, 1);
      }
      if (key === "ArrowUp") {
        mainPlayer.move(0, -1);
      }
    }
  }
}

function render() {
  ctx.clearRect(0, 0, gameWidth, gameHeight);
  
  backElements.forEach((e) => e.draw());
  gameElements.forEach((e) => e.draw());
}

function gameLoop() {
  update();
  render();

  setTimeout(() => requestAnimationFrame(gameLoop), 10);
}

document.addEventListener("DOMContentLoaded", initialize);
