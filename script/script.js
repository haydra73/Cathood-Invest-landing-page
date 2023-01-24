/*====== ANIMATE GSAP ======*/
/*Navbar*/
gsap.from(".nav__logo", {
  opacity: 0,
  duration: 0.5,
  delay: 0.4,
  y: 30,
  ease: "expo.out",
});
gsap.from(".nav__item", {
  opacity: 0,
  duration: 0.5,
  delay: 0.6,
  y: 35,
  ease: "expo.out",
  stagger: 0.2,
});
gsap.from(".btn", {
  opacity: 0,
  duration: 0.5,
  delay: 0.8,
  y: 30,
  ease: "expo.out",
});
gsap.from(".intro", {
  opacity: 0,
  duration: 0.5,
  delay: 1,
  y: 30,
  ease: "expo.out",
});

/*====== SCROLL REVEAL SECTION ======*/
const sr = ScrollReveal({
  duration: 500,
  reset: false,
});

sr.reveal(".rules", { origin: "bottom", distance: "90px", delay: 50 });
sr.reveal(".qr__card--0", { origin: "left", distance: "50px", delay: 100 });
sr.reveal(".qr__card--1", { origin: "right", distance: "50px", delay: 100 });

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1,
});

let link = document.getElementById("link");
let burger = document.getElementById("burger");
let ul = document.querySelector("ul.mobile-menu");

link.addEventListener("click", function (e) {
  e.preventDefault();
  burger.classList.toggle("open");
  ul.classList.toggle("open");
});

document.addEventListener("click", function (event) {
  if (!event.target.classList.contains("accordion-toggle")) return;

  const content = document.querySelector(event.target.hash);
  if (!content) return;

  event.preventDefault();

  if (content.classList.contains("active")) {
    content.classList.remove("active");
    return;
  }

  const accordions = document.querySelectorAll(".accordion-content.active");
  const arrows = document.querySelectorAll(".accordion-arrow.active");
  for (let i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove("active");
    arrows[i].classList.remove("active");
  }

  content.classList.toggle("active");
});

// Calculate the bit

const numOne = document.getElementById("calc");
const addSum = document.getElementById("percentage");

numOne.addEventListener("input", cal);

function cal() {
  const one = Number(numOne.value) || 0;
  const result = Number(one * 2);
  addSum.innerHTML = result;
}

const numtwo = document.getElementById("calculate");
const addmin = document.getElementById("percent");

numtwo.addEventListener("input", calc);

function calc() {
  const two = Number(numtwo.value) || 0;
  const resultTwo = Number(two * 2);
  addmin.innerHTML = resultTwo;
}
