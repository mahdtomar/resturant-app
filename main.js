const nav = document.getElementById("nav");
const slider = document.querySelector(".slider");
const comments = document.querySelectorAll(".comment");
const commentsArray = Array.from(comments);
let order = Number(slider.getAttribute("num"));
const menu = document.getElementById("navigation-menu");
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
  order <= 0 ? (order = commentsArray.length - 1) : --order;
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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add("active");
    } else {
      element.target.classList.remove("active");
    }
  });
});
sections.forEach((e) => {
  observer.observe(e);
});

const links = Array.from(document.querySelectorAll(".nav-link"));
links.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    navigation(e.target.textContent);
    console.log(e.target);
  });
});
function navigation(id) {
  const element = document.getElementById(id);
  console.log(id);
  console.log(document.getElementById(id).offsetTop);
  window.scrollTo({
    top: element.offsetTop - 100,
    left: 0,
    behavior: "smooth",
  });
  // window.moveTo(0, document.getElementById(id).clientHeight);
  console.log(window.scrollY);
}
