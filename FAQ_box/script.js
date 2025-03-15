const toggleBtn = document.querySelectorAll(".faq_toggle");

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});
