// AMDG

// Syntax: HEAD + id + API_KEY
const HEAD = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '?api_key=c5ba8a5515433371758b58ff5cc7538a';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const movie_closeup = document.getElementById('movie-closeup');
const main = document.getElementById('main');

async function getMovie(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    showMovie(data);
}

function showMovie(movieData) {
    const { title, poster_path, vote_average, overview, id } = movieData;

    main.innerHTML = ``
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie-closeup');
    // movieEl.innerHTML = `
    //   <img src="${IMG_PATH + poster_path}" alt="${title}">
    //   <div class="movie-info">
    //     <h3>${title}</h3>
    //     <span class="${vote_average}">${Math.round(vote_average * 10)/10}</span>
    //   </div>
    //   <div class="overview">
    //     <h3>Overview</h3>
    //     ${overview}
    //   </div>
    // `
    movieEl.innerHTML = `
    <main id="main">
    <div class="movie-closeup">
      <img src="${IMG_PATH + poster_path}">
      <div class="movie-info">
        <h1>${title}</h1>
        <div class="overview">
          ${overview}
        </div>
      </div>
    </div>
  </main>
    `
    main.appendChild(movieEl);
}

let params = new URLSearchParams(document.location.search);
const ID = params.get('id')
console.log(ID);
console.log(HEAD + ID + API_KEY);
getMovie(HEAD + ID + API_KEY);