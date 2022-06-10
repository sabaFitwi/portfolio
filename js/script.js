// Hiding preloader
window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("hidePreloader");
  document.body.style.overflow = "visible";
});
const elements = document.querySelectorAll(".scroll-down");
window.addEventListener("scroll", slideUp);
function slideUp() {
  for (var i = 0; i < elements.length; i++) {
    const element = elements[i];
    const distInView =
      element.getBoundingClientRect().top - window.innerHeight + 30;
    if (distInView < 0) {
      element.classList.add("inView");
    } else {
      element.classList.remove("inView");
    }
  }
}
slideUp();

// navbar toggle
const navButton = document.querySelector(".navbar-toggler");
const navMenu = document.querySelector(".navbar-collapse");
navButton.addEventListener("click", () => {
  navMenu.classList.toggle("toggleNav");
});

// typewriter
let app = document.getElementById("typeEffect");
let typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("I'm Saba Samuel")
  .pauseFor(2500)
  .deleteAll()
  .typeString("I'm a front-end developer")
  .pauseFor(2500)
  .deleteAll()
  .typeString("I'm Web Designer")
  .pauseFor(2500)
  .start();

// stopping transition during resizing
let transitionStopper;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-transition-stopper");
  clearTimeout(transitionStopper);
  transitionStopper = setTimeout(() => {
    document.body.classList.remove("resize-transition-stopper");
  }, 400);
});

// showing navbar after scrolling
window.addEventListener("scroll", () => {
  let position =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  const navbar = document.querySelector(".navbar");
  if (position >= 0) {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
});
