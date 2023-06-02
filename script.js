const setup = document.getElementById("setup");
const delivery = document.getElementById("delivery");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

function getJokes() {
    fetch(url).then(Response => Response.json().then(result => {
        setup.innerHTML = result.setup;
        delivery.innerHTML = result.delivery;
    }));
}

window.addEventListener("load", getJokes);
btn.addEventListener("click", getJokes);