const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const bgs = document.querySelectorAll(".bg");
const bgTexts = document.querySelectorAll(".bt-text");

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1503914068268-5413b35b45ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"alt=""/>';
  title.innerHTML = "This is title";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, numquam.";
  profileImg.innerHTML = '<img src="../img.png" alt="" />';
  name.innerText = "Vivek Kanade";
  date.innerText = "March 01, 2022";

  bgs.forEach((bg) => bg.classList.remove("bg"));
  bgTexts.forEach((bg) => bg.classList.remove("bg-text"));
}

setTimeout(getData, 2000);
