let canva = document.getElementById("canva");
const ctx = canva.getContext("2d");

ctx.strokeStyle = "red";

let x = 0,
  y = 0;

ctx.moveTo(x, y);

let count = 1;
let interval = setInterval(function () {
  x += 10;
  y += 10;

  ctx.lineTo(x, y);
  ctx.stroke();

  if (x >= 500) {
    clearInterval(interval);
    alert("animation end");
  }
  console.log(x, y);
}, 25);
ctx.stroke;
