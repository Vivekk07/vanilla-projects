const toggles = document.querySelectorAll(".fa-times");
const divToggles = document.querySelectorAll(".faq");

// toggles.forEach((toggle) => {
//   toggle.addEventListener("click", () => {
//     toggle.parentNode.parentNode.classList.remove("active");
//   });
// });

function a() {
  this.classList.toggle("active");
}

divToggles.forEach((toggle1) => {
  toggle1.addEventListener("click", a);
});
