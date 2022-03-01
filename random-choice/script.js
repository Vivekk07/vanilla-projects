const tags = document.getElementById("tags");
const text = document.getElementById("textarea");

text.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  const tag = input
    .split(" ")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tags.innerHTML = "";
  tag.forEach((e) => {
    const span = document.createElement("span");
    span.classList.add("tag");
    span.innerText = e;
    tags.appendChild(span);
  });
}

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlight(randomTag);
    setTimeout(() => {
      unHighlight(randomTag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlight(randomTag);
    });
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
  tag.classList.add("highlight");
}

function unHighlight(tag) {
  tag.classList.remove("highlight");
}
