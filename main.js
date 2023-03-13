const nav = document.getElementById("nav");
const slider = document.querySelector(".slider");
const comments = document.querySelectorAll(".comment");
const commentsArray = Array.from(comments);
let order = Number(slider.getAttribute("num"));
const menu = document.getElementById("menu");
const ul = document.getElementById("ul");
const closeIcon = document.querySelector(".close-icon");
menu.addEventListener("click", () => {
  ul.classList.toggle("visible");
});
closeIcon.addEventListener("click", () => {
  ul.classList.remove("visible");
});
function checkingScrolling() {
  if (window.scrollY > 0) {
    nav.style.backgroundColor = "var(--bluesh-black)";
  } else {
    nav.style.backgroundColor = "transparent";
  }
}

window.onload = checkingScrolling;
window.addEventListener("scroll", checkingScrolling);
window.addEventListener("scroll", checkingScrolling);

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
let sections = Array.from(document.querySelectorAll(".moving"));

window.onscroll = () => {
  sections.forEach((section) => {
    const slideInAt =
      window.scrollY + window.innerHeight - section.clientHeight / 2;
    const sectionBottom = section.offsetTop + section.clientHeight;
    const isHalfShown = slideInAt > section.offsetTop;
    const isNoScrolledPast = window.scrollY < sectionBottom;
    if (isHalfShown && isNoScrolledPast) {
      section.classList.add("active");
    }
  });
};
window.onscroll(console.log(window.screenY));
