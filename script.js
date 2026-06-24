// Slider functionality
const slides = document.querySelector(".slider-inner");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const videos = document.querySelectorAll(".slider-item video");
let current = 0;
videos[current].play();

function changeSlide(index) {
  if (index === current) return;
  slides.classList.remove("to-left", "to-right");
  const goesRight = index > current;

  if (goesRight) {
    slides.classList.add("to-left");
    videos[current].pause();
    videos[index].play();
  } else {
    slides.classList.add("to-right");
    videos[current].pause();
    videos[index].play();
  }
  dots[current].classList.remove("active");
  dots[index].classList.add("active");

  current = index;
}

nextBtn.addEventListener("click", () => {
  if (current == 1) return;
  changeSlide(current + 1);
});

prevBtn.addEventListener("click", () => {
  if (current == 0) return;
  changeSlide(current - 1);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => changeSlide(index));
});

// Scroll animations for smaki section
const smakis = document.querySelectorAll(".smaki p");

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  smakis.forEach((smak, i) => {
    const rect = smak.getBoundingClientRect().top;
    if (rect < triggerBottom) {
      setTimeout(() => smak.classList.add("active"), i * 20);
    }
  });
}

window.addEventListener("scroll", checkScroll);
checkScroll();

// Scroll animations for products section
const items = document.querySelectorAll(".product-item");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  items.forEach((item, i) => {
    const rect = item.getBoundingClientRect().top;
    if (rect < triggerBottom) {
      setTimeout(() => item.classList.add("active"), i * 150);
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

// Show more description blocks
const descBlocks = document.querySelectorAll(".desc-cont");
const showMoreBtn = document.querySelector(".more");
let currentIndexDesc = 1;

showMoreBtn.addEventListener("click", () => {
  descBlocks.forEach((block, i) => {
    block.classList.add("show");
    showMoreBtn.style.display = "none";
  });
});

// hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".hamburger-content");
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

hamburger.addEventListener("click", () => {
  navMenu.classList.add("active");
});

// Age verification modal
const ageModal = document.getElementById("ageModal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

window.addEventListener("load", () => {
  if (localStorage.getItem("ageConfirmed") != "true") {
    ageModal.style.display = "flex";
  } else {
    ageModal.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  localStorage.setItem("ageConfirmed", "true");
  ageModal.style.display = "none";
});

noBtn.addEventListener("click", () => {
  alert("Zugriff nicht möglich. Diese Seite ist nur für Erwachsene ab 18 Jahren.");
  window.close();
  window.location.href = "https://www.google.de";
});

// city div

const city = document.getElementById("city");
const cont = document.querySelectorAll(".foot-cont-three a");

city.addEventListener("click", toggleCont);
function toggleCont() {
  city.classList.toggle("active");
  Array.from(cont).forEach((el) => {
    el.style.display = el.style.display === "block" ? "none" : "block";
  });
}
const yearSpan = document.querySelector('#year');
if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}
