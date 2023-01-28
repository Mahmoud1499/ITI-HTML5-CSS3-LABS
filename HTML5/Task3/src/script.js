var canvasElement = document.querySelector("#myCanvas");
var context = canvasElement.getContext("2d");

// the triangle

context.beginPath();
context.moveTo(300, 100);
context.lineTo(200, 300);
context.lineTo(300, 300);
context.closePath();

context.font = "20px Comic Sans MS";

context.fillText("c", 230, 200);
context.fillText("b", 320, 200);
context.fillText("a", 240, 320);

// the outline
context.lineWidth = 10;
// context.strokeStyle = "#666666";
// context.stroke();

// the fill color
context.fillStyle = "red";
context.fill();
