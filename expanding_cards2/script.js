const myCards = document.querySelectorAll("cards");

myCards.forEach((cards) => {
  cards.addEventListener("click", () => {
    removeClasses();
    cards.classList.add("active");
  });
});
function removeClasses() {
  cards.classList.romove("active");
}
