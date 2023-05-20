const keys = {};

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

document.addEventListener("touchstart", () => {
  const fatty = Math.floor(50 * Math.random() + 10);
    (fatty > 20 ? backElements : gameElements).push(
      new Player(
        Math.floor(Math.random() * gameWidth),
        Math.floor(Math.random() * gameHeight),
        fatty,
        fatty,
        fatty > 20 ? "#2c6f9b" : "#0099ff"
      )
    );
})

function handleKeyDown(event) {
  const key = event.key;
  keys[key] = true;
  if (key === "Enter") {
    const fatty = Math.floor(50 * Math.random() + 10);
    (fatty > 20 ? backElements : gameElements).push(
      new Player(
        Math.floor(Math.random() * gameWidth),
        Math.floor(Math.random() * gameHeight),
        fatty,
        fatty,
        fatty > 20 ? "#a53434" : "red"
      )
    );
  }
}

function handleKeyUp(event) {
  const key = event.key;
  keys[key] = false;
}
