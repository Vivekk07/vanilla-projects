const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive < 4 ? currentActive++ : (currentActive = 4);
  //   console.log(currentActive);
  update();
});

prev.addEventListener("click", () => {
  currentActive > 1 ? currentActive-- : (currentActive = 1);
  //   console.log(currentActive);
  update();
});

const update = function () {
  circles.forEach((circle, i) => {
    i < currentActive
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });

  currentActive === 1 ? (prev.disabled = true) : (prev.disabled = false);

  currentActive === 4 ? (next.disabled = true) : (next.disabled = false);

  progress.style.width = Math.round(((currentActive - 1) / 3) * 100) + "%";
};
