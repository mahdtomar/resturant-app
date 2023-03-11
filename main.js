const nav = document.getElementById("nav");
window.onscroll = () => {
  if (window.scrollY > 0) {
    nav.style.backgroundColor = "black";
    nav.style.zIndex = 9999
  } else {
    nav.style.backgroundColor = "transparent";
  }
};
