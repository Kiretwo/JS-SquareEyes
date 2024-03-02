import {formatMovieForCart, updateCart} from './utils.js';

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const out = document.querySelector("div#movieDetails");
let ref = document.referrer;

const listData = (movie) => {
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
      <button class="add-to-cart-btn" data-id="${movie.id}">Add to Cart</button>
      </div>
    `;
    out.innerHTML = newDiv;


    const addToCartButton = document.querySelector(".add-to-cart-btn");
    addToCartButton.addEventListener("click", () => {
        addToCart(movie);
        // Redirect to the shopping cart page
        window.location.href = "shopping-cart.html";
    });
};




const addToCart = (movie) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the movie is already in the cart
  const existingItem = cart.find((item) => item.id === movie.id);

  if (!existingItem) {
    // If the movie is not in the cart, add it
    cart.push(formatMovieForCart(movie));
  }

  // Update the cart in localStorage
  updateCart(cart);
};


const movieDetails = async () => {
    const api = `https://v2.api.noroff.dev/square-eyes/${id}`;
    try {
        const response = await fetch(api);
        if (!response.ok) throw response.statusText;
        const data = await response.json();
        listData(data.data);
    } catch (error) {
        console.error("Error message: " + error);
    }
};

movieDetails();

