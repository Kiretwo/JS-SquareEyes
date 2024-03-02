  const movieListContainer = document.getElementById('movieList');
  let moviesData;

  async function fetchData() {
    try {
      const api = "https://v2.api.noroff.dev/square-eyes";
      const response = await fetch(api);
      if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
      const data = await response.json();
      moviesData = data.data;
      renderMovies(moviesData);
    } catch (error) {
      console.error(error.message);
    }
  }

  fetchData();

  const checkboxes = document.querySelectorAll('input[name="checkbox-genre"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => filterMovies());
  });

  function filterMovies() {
    const selectedGenres = Array.from(document.querySelectorAll('input[name="checkbox-genre"]:checked'))
      .map(checkbox => checkbox.id);

    const filteredMovies = moviesData.filter(movie => {
      return selectedGenres.length === 0 || selectedGenres.includes(movie.genre.toLowerCase());
    });

    renderMovies(filteredMovies);
  }

  function renderMovies(movies) {
    movieListContainer.innerHTML = '';

    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      movieCard.innerHTML = `
        <a href="detail.html?id=${movie.id}">
          <img src="${movie.image.url}" alt="${movie.title}">
          <h2>${movie.title}</h2>
          <p id='rating'>Rating: ${movie.rating}</p>
          <p id='price'>Price: $${movie.price}</p>
        </a>
      `;
      movieListContainer.appendChild(movieCard);
    });
  }


