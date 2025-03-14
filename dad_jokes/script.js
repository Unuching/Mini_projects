const myJokes = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateNewJoke);
generateNewJoke();
async function generateNewJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();
  myJokes.innerHTML = data.joke;
}
//     .then((res) => res.json())
//     .then((data) => {
//       myJokes.innerHTML = data.joke;
//     });
// }
