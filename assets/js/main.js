// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener("click", function () {
  CShamburgerMenu.classList.toggle("cs-active");
  CSnavbarMenu.classList.toggle("cs-active");
  CSbody.classList.toggle("cs-open");
  // run the function to check the aria-expanded value
  ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
  const csUL = document.querySelector("#cs-expanded");
  const csExpanded = csUL.getAttribute("aria-expanded");

  if (csExpanded === "false") {
    csUL.setAttribute("aria-expanded", "true");
  } else {
    csUL.setAttribute("aria-expanded", "false");
  }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll
// animations with the navbar

document.addEventListener("scroll", (e) => {
  const scroll = document.documentElement.scrollTop;
  if (scroll >= 100) {
    document.querySelector("body").classList.add("scroll");
  } else {
    document.querySelector("body").classList.remove("scroll");
  }
});

// mobile nav toggle code
const dropDowns = Array.from(
  document.querySelectorAll("#cs-navigation .cs-dropdown")
);
for (const item of dropDowns) {
  const onClick = () => {
    item.classList.toggle("cs-active");
  };
  item.addEventListener("click", onClick);
}
/*  prodct js */

const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

/* FAQ */
const faqItems = Array.from(document.querySelectorAll(".cs-faq-item"));
for (const item of faqItems) {
  const onClick = () => {
    item.classList.toggle("active");
  };
  item.addEventListener("click", onClick);
}

/* index  */
const imgBox = document.querySelector(".card-img");
const slides = imgBox.getElementsByTagName("img");
const textContent = document.querySelector(".text-content");
const textData = textContent.getElementsByTagName("div");

let currentIndex = 0; // Track the current slide index

// Function to show the slide based on the index
function showSlide(index) {
  // Hide all slides and text data
  for (let slide of slides) {
    slide.classList.remove("active");
  }
  for (let text of textData) {
    text.classList.remove("active");
  }
  // Show the current slide and its corresponding text
  slides[index].classList.add("active");
  textData[index].classList.add("active");
}

// Function to go to the next slide
function next() {
  currentIndex = (currentIndex + 1) % slides.length; // Increment index and wrap around
  showSlide(currentIndex); // Show the slide
}

// Function to go to the previous slide
function previuos() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Decrement index and wrap around
  showSlide(currentIndex); // Show the slide
}

// Initialize the first slide
showSlide(currentIndex);
