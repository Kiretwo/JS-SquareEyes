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
    //document.title = amiibo.character; 
    document.title = movie.title; 
    let newDiv = `
        <h1>${movie.title}</h1>
        <img src="${movie.image.url}" alt="${movie.title}">
    `;
    out.innerHTML = newDiv;
}

const getAllAmiibos = async () => {
    const api = `https://v2.api.noroff.dev/square-eyes/${id}`;
    try {
        const response = await fetch(api); 
        if (!response.ok) throw response.statusText;
        const data = await response.json();
        //console.log (data.amiibo);
        listData(data.data);
    } catch (error) {
        console.error("Error message: "+error);
    }
}

getAllAmiibos();


