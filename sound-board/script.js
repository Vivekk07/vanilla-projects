const sounds = [
  "applause👏🏼",
  "bass🔉",
  "bird🐦",
  "camera📸",
  "dream💤",
  "guitar🎸",
  "piano🎹",
];

const stop = document.querySelector(".stop");

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  const song = document.getElementById(sound);
  btn.addEventListener("click", () => {
    stopper();
    song.play();
  });
  document.getElementById("buttons").appendChild(btn);
});

function stopper() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}

stop.addEventListener("click", stopper);
