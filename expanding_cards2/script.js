const myCards = document.querySelectorAll(".cards");

myCards.forEach((card) => {
  card.addEventListener("click", () => {
    removeClasses();
    card.classList.add("active");
  });
});

function removeClasses() {
  myCards.forEach((card) => {
    card.classList.remove("active");
  });
}
