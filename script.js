const API_KEY = "de311323921e12c42bb99e8c0f0f35f6";
const BASE_URL = "https://api.themoviedb.org/3";


const fetchPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

const promisse = fetchPopularMovies();

promisse.then((result) => {
    console.log(promisse);
})
