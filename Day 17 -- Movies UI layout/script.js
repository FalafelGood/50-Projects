// AMDG

// The API for TMDB allows you to specify options in the url. Here, in the API_URL, we're asking the database to give us one page (~30 movies) of new movies sorted by popularity in descending order. Notice also that I've included my API key.
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c5ba8a5515433371758b58ff5cc7538a&page=1';

// Similarly, there are options that I can specify for the image path. In this case, I'm asking for poster images with a width of 1280px.
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

// We can also use the API to search movies with their engine. Again, I have to provide my API key here... Notice that the query argument ends with a single " character. This is necessary, since we're going to be injecting our own queries through the search bar.
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=c5ba8a5515433371758b58ff5cc7538a&query="'

const form = document.getElementById('form');
const main = document.getElementById('main');

/*
This is a async function because we have to await the fetching of the result and the unpacking of the data (not sure about that latter part...)
*/
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
    showMovies(data.results);
}

// Movies is the incoming movie data
function showMovies(movies) {
    // Reset the document;
    main.innerHTML = '';
    movies.forEach((movie) => {
        // Use destructuring to pull data out of the movie object.
        // With this syntax, we pull out movie.title, movie.poster_path, etc...
        console.log(movie);

        const { title, poster_path, vote_average, overview, id } = movie;

        // Build the window
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
          <a href="movie-details.html?id=${id}">
          <img src="${IMG_PATH + poster_path}" alt="${title}">
          <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${Math.round(vote_average * 10)/10}</span>
          </div>
          <div class="overview">
            <h3>Overview</h3>
            ${overview}
          </div>
          </a>
        `
        main.appendChild(movieEl);
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}


form.addEventListener('submit', (e) => {
    // Because this is a submit, we need to prevent the default behavior of the event (so it doesn't submit to the page) Maybe this is a placeholder?
    e.preventDefault();
    const searchTerm = search.value;
    console.log(searchTerm);

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);
        search.value = ''
    } else {
        // If we submit nothing, just reload the page.
        window.location.reload();
    }
})

getMovies(API_URL);