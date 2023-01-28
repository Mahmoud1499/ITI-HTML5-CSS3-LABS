const r = document.querySelector("#red");
const g = document.querySelector("#green");
const b = document.querySelector("#blue");

const text = document.querySelector("#text");

function setColor() {
  let r_hexVal = parseInt(r.value, 10).toString(16),
    g_hexVal = parseInt(g.value, 10).toString(16),
    b_hexVal = parseInt(b.value, 10).toString(16),
    hexVal = "#" + pad(r_hexVal) + pad(g_hexVal) + pad(b_hexVal);
  text.style.color = hexVal;
}

function pad(n) {
  return n.length < 2 ? "0" + n : n;
}

r.addEventListener(
  "change",
  function () {
    setColor();
  },
  false
);

g.addEventListener(
  "change",
  function () {
    setColor();
  },
  false
);

b.addEventListener(
  "change",
  function () {
    setColor();
  },
  false
);
