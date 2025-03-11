const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover_left");
  container.classList.remove("hover_right");
});
// left.addEventListener("mouseleave", () => {
//   container.classList.remove("hover_right");
// });
right.addEventListener("mouseenter", () => {
  container.classList.add("hover_right");
  container.classList.remove("hover_left");
});
// right.addEventListener("mouseleave", () => {
//   container.classList.remove("hover_left");
// });
