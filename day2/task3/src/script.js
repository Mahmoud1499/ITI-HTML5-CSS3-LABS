var btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
});
