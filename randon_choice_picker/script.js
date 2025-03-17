const tagsEL = document.getElementById("tags");
const textArea = document.getElementById("textArea");

textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});
function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEL.innerHTML = "";

  tags.forEach((tag) => {
    const tag_EL = document.createElement("span");
    tag_EL.classList.add("tag");
    tag_EL.innerText = tag;
    tagsEL.appendChild(tag_EL);
  });
}
function randomSelect() {
  const highlightTimes = 40;
  const interval = setInterval(() => {
    const randomTag = pickRandonTag();
    highlightOn(randomTag);
    setTimeout(() => {
      highlightOff(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandonTag();
      highlightOn(randomTag);
    }, 100);
  }, highlightTimes * 100);
}
function pickRandonTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightOn(tag) {
  tag.classList.add("highlight");
}
function highlightOff(tag) {
  tag.classList.remove("highlight");
}
