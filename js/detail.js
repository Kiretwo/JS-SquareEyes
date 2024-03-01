      console.clear();

// get the query string
const queryString = document.location.search;
// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);
// get the id parameter from the query string
const id = params.get("id");   
console.log(id);

const out = document.querySelector("div#movieDetails");
let ref = document.referrer;
console.log(ref);

const listData = (movie) => {
    console.log(movie);
    document.title = movie.title; 
    let newDiv = `
      <img src="${movie.image.url}" alt="${movie.title}">
      <h1>${movie.title}</h1>
      <p class="movie-detail-text">${movie.description}</p>
      <p class="movie-detail-text">Rating: ${movie.rating}</p>
      <p class="movie-detail-text">Genre: ${movie.genre}</p>
      <p class="movie-detail-text">Released: ${movie.released}</p>
      <div class="price-container">
      <p class="movie-detail-price"><strong>Price: $${movie.price}</strong></p>
      <button class="add-to-cart-btn">Add to Cart</button>
      </div>
    `;
    out.innerHTML = newDiv;
}

const movieDetails = async () => {
    const api = `https://v2.api.noroff.dev/square-eyes/${id}`;
    try {
        const response = await fetch(api); 
        if (!response.ok) throw response.statusText;
        const data = await response.json();
        listData(data.data);
    } catch (error) {
        console.error("Error message: "+error);
    }
}

movieDetails();


