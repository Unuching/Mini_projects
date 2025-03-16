const tagsEL = document.getElementById("tags");
const textArea = document.getElementById("textArea");

textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
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
