const smallCups = document.querySelectorAll(".cup_small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();
smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    Highlight_cups(idx);
  });
});
function Highlight_cups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup_small.full").length;
  const totalCups = smallCups.length;
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 230}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups == totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
  }
}


