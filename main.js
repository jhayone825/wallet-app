
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let carX = 100, carY = 100;
let speed = 2;

function drawCar() {
  ctx.fillStyle = "red";
  ctx.fillRect(carX, carY, 50, 30);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCar();
  requestAnimationFrame(update);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") carX += speed;
  if (e.key === "ArrowLeft") carX -= speed;
  if (e.key === "ArrowUp") carY -= speed;
  if (e.key === "ArrowDown") carY += speed;
});

update();
