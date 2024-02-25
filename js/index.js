document.addEventListener("DOMContentLoaded", function () {
  fetch('https://v2.api.noroff.dev/square-eyes')
	.then(response => response.json())
	.then(data => {
    const movieListContainer = document.getElementById('movieList');

    data.data.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');

      movieCard.innerHTML = `
          <img src="${movie.image.url}" alt="${movie.image.alt}">
          <h2>${movie.title}</h2>
          <p id='rating'>Rating: ${movie.rating}</p>
          <p id='price'>Price: $${movie.price}</p>
      `;

      movieListContainer.appendChild(movieCard);
    });
	})
	.catch(error => console.error('Error fetching data:', error));
});