  /*
  document.addEventListener("DOMContentLoaded", function () {
  let moviesData; // Variable to store the original movie data

  fetch('https://v2.api.noroff.dev/square-eyes')
    .then(response => response.json())
    .then(data => {
      moviesData = data.data; // Store the original data
      renderMovies(moviesData); // Render all movies initially
    })
    .catch(error => console.error('Error fetching data:', error));
  */






  /*
  const out = document.querySelector("div#movieList");

  async function fetchData() {
    try {
      const api = "https://v2.api.noroff.dev/square-eyes";
      const response = await fetch(api);
      if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
      const data = await response.json();
      console.log(data);
      listData(data.data)
    } catch (error) {
      console.error(error.message);
    }
  }

  fetchData();

  // Add event listener for the checkboxes
  const checkboxes = document.querySelectorAll('input[name="checkbox-genre"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => filterMovies());
  });

  // Add event listener for the "Select all" button
  document.getElementById('selectAll').addEventListener('click', () => {
    checkboxes.forEach(checkbox => {
      checkbox.checked = true;
    });
    filterMovies();
  });

  // Add event listener for the "Clear all" button
  document.getElementById('clearAll').addEventListener('click', () => {
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
    filterMovies();
  });


  // Function to render movies based on the selected genres
  function filterMovies() {
    const selectedGenres = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.id);

    const filteredMovies = moviesData.filter(movie => {
      return selectedGenres.length === 0 || selectedGenres.includes(movie.genre.toLowerCase());
    });

    renderMovies(filteredMovies);
  }

  // Function to render movies to the DOM
  function renderMovies(movies) {
    const movieListContainer = document.getElementById('movieList');
    movieListContainer.innerHTML = ''; // Clear previous content

    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');

      movieCard.innerHTML = `
        <img id='movie-img' src="${movie.image.url}" alt="${movie.image.alt}">
        <h2>${movie.title}</h2>
        <p id='rating'>Rating: ${movie.rating}</p>
        <p id='price'>Price: $${movie.price}</p>
      `;

      movieListContainer.appendChild(movieCard);
    });
  }

  function listData(list) {
    console.log (list);

    let outString = "";
    for (let movie of list) {
        console.log(movie);
        outString += `
        <li>
            <a href="test-detail.html?id=${movie.id}">
                ${movie['title']}
            </a>
        </li>`;
    }
    out.innerHTML = outString;
    
  }
*/


document.addEventListener("DOMContentLoaded", function () {
  const movieListContainer = document.getElementById('movieList');
  let moviesData;

  async function fetchData() {
    try {
      const api = "https://v2.api.noroff.dev/square-eyes";
      const response = await fetch(api);
      if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
      const data = await response.json();
      console.log(data);
      moviesData = data.data; // Store the original data
      renderMovies(moviesData); // Render all movies initially
    } catch (error) {
      console.error(error.message);
    }
  }

  fetchData();

  // Add event listener for the checkboxes
  const checkboxes = document.querySelectorAll('input[name="checkbox-genre"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => filterMovies());
  });

  // Function to render movies based on the selected genres
  function filterMovies() {
    const selectedGenres = Array.from(document.querySelectorAll('input[name="checkbox-genre"]:checked'))
      .map(checkbox => checkbox.id);

    const filteredMovies = moviesData.filter(movie => {
      return selectedGenres.length === 0 || selectedGenres.includes(movie.genre.toLowerCase());
    });

    renderMovies(filteredMovies);
  }

  // Function to render movies to the DOM
  function renderMovies(movies) {
    movieListContainer.innerHTML = ''; // Clear previous content

    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');

      movieCard.innerHTML = `
        <a href="detail.html?id=${movie.id}">
          <img src="${movie.image.url}" alt="${movie.image.alt}">
          <h2>${movie.title}</h2>
          <p id='rating'>Rating: ${movie.rating}</p>
          <p id='price'>Price: $${movie.price}</p>
        </a>
      `;

      movieListContainer.appendChild(movieCard);
    });
  }
});


