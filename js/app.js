// slider
const slideItems = document.querySelectorAll(".slider-item");

const rectangles = document.querySelectorAll(".rectangle");
const sliders = document.querySelectorAll(".content-box");

const projectsTitles = document.querySelectorAll(".project-title");
const projects = document.querySelectorAll(".image");
const pinkLine = document.querySelectorAll(".pink-line");

let myInterval = null;
let activeIndex = 0;

initSlider();
function initSlider() {
  renderSliders();
  startAutoSliding();
}
