const nav = document.getElementById("nav");
const slider = document.querySelector(".slider");
const comments = document.querySelectorAll(".comment");
const commentsArray = Array.from(comments);
let order = Number(slider.getAttribute("num"));

function checkingScrolling() {
  if (window.scrollY > 0) {
    nav.style.backgroundColor = "var(--bluesh-black)";
  } else {
    nav.style.backgroundColor = "transparent";
  }
}

window.onload = checkingScrolling;
window.onscroll = checkingScrolling;

// changing comments
function forward() {
  order >= commentsArray.length - 1 ? (order = 0) : ++order;
  showComments(order);
}
function backward() {
  order <= 0 ? (order = commentsArray.length - 1) : ++order;
  showComments(order);
}
function showComments(num) {
  // hiding all elements
  commentsArray.map((e) => {
    e.classList.remove("visible");
    e.classList.add("hidden");
  });
  // displaying the current element in the order
  commentsArray[num].classList.remove("hidden");
  commentsArray[num].classList.add("visible");
}
showComments(order);
