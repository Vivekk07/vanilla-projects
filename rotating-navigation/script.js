const hamburger = document.getElementById("open");
const cross = document.getElementById("close");
const body = document.querySelector(".container");
const circle = document.querySelector(".circle-container");

hamburger.addEventListener("click", () => {
  body.classList.add("show-nav");
  circle.classList.add("show-cross");
});

cross.addEventListener("click", () => {
  body.classList.remove("show-nav");
  circle.classList.remove("show-cross");
});
