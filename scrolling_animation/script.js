const my_boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkboxes);

checkboxes();
function checkboxes() {
  const trigger_bottom = (window.innerHeight / 4) * 3;

  my_boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < trigger_bottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
