const load_text = document.querySelector(".loading_text");
const background = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);
function blurring() {
  load++;
  console.log(load);
  
}
