const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {}
