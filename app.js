const first = document.querySelector(".one");
const second = document.querySelector(".two");
const third = document.querySelector(".three");
const mark = document.querySelector(".mark");
const section = document.querySelectorAll(".section");
const dott = document.querySelector(".dot");
let newSection;

mark.addEventListener("click", () => {
  for (const each of section) {
    each.classList.remove("section");
    each.classList.add("new-section");
    document.querySelector(".circle").innerText = "0";
    dott.style.display = "none";
  }
});
first.addEventListener("click", () => {
  document.querySelector(".circle").innerText = section.length - 1;
  first.classList.remove("section");
  first.classList.add("new-section");
  dott.style.display = "none";
});
second.addEventListener("click", () => {
  document.querySelector(".circle").innerText = section.length - 2;
  second.classList.remove("section");
  second.classList.add("new-section");
  dott.style.display = "none";
});

third.addEventListener("click", () => {
  document.querySelector(".circle").innerText = section.length - 3;
  third.classList.remove("section");
  third.classList.add("new-section");
  dott.style.display = "none";
});
