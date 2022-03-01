const nav = document.getElementById("id");
const button = document.getElementById("toggle");

button.addEventListener("click", () => {
  nav.classList.toggle("active");
});
