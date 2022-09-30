const first = document.querySelector(".one");
const second = document.querySelector(".two");
const third = document.querySelector(".three");
const mark = document.querySelector(".mark");
const section = document.querySelectorAll(".section");
const dott = document.querySelector(".dot");
mark.addEventListener("click", () => {
  for (const each of section) {
    each.classList.remove("section");
    each.classList.add("new-section");
    document.querySelector(".circle").innerText = "0";
    dott.style.display = "none";
  }
});
// first.addEventListener("click", () => {
//   document.querySelector(".circle").innerText = section.length - 1;
//   first.classList.remove("section");
//   first.classList.add("new-section");

for (let i = 0; i < section.length; i--) {
  document.querySelectorAll(".circle").innerText = section.length - 1;
  second.classList.remove("section");
  second.classList.add("new-section");
}
// });
// second.addEventListener("click", () => {
//   document.querySelector(".circle").innerText = section.length - 1;
//   second.classList.remove("section");
//   second.classList.add("new-section");
// });
// third.addEventListener("click", () => {
//   document.querySelector(".circle").innerText = section.length - 1;
//   third.classList.remove("section");
//   third.classList.add("new-section");
// });
