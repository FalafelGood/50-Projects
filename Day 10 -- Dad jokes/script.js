// AMDG
const jokeEl = document.querySelector('.container h1');
const jokeBtn = document.querySelector('.container button');
jokeBtn.addEventListener('click', generateJoke);

generateJoke()

// Make a fetch request to icanhazjoke.com
function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', config)
        .then((res) =>res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke;
        });
}
