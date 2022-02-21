const button = document.querySelector(".btn");
const container = document.querySelector(".search");
const input = document.querySelector(".input");

button.addEventListener("click", () => {
  container.classList.toggle("active");
  input.focus();
});
