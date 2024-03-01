export let favourites;
const storageFavourites = localStorage.getItem("favourites");
//console.log(storageFavourites);
if (!storageFavourites) {
    // There is no favourites in storage, initialize an empty array
    favourites = [];
    localStorage.setItem("favourites", JSON.stringify(favourites));
} else {
    favourites = JSON.parse(storageFavourites); // Get the array
}
console.log(favourites);

export function listData(list, out){
    //console.log ("List:", list);
    out.innerHTML = "";
    let newDivs = "";
    for (let card of list) {
        //console.log(card);
        const id = card.id;
        newDivs += `<div>
        <button class="favourite" id=${id}>&#x2665;</button>
        <img src="${card.image.url}" alt="${card.title}">
        <h2>${card.title}</h2>
        <p>Price: $${card.price}</p>
        <a href="./amiibo-details.html?id=${id}">Read More</a>
        </div>`;
    }
   //console.log(newDivs);
    out.innerHTML = newDivs;
    // Add eventlisteners to all the new buttons
    const btns = document.querySelectorAll("button.favourite");
    for (const btn of btns) {
        if (favourites.includes(btn.id)) btn.style.color = "red";
        //console.log("btn.id", btn.id, " in ", favourites);
        btn.addEventListener("click", toggleFavourite);
    }
}

function toggleFavourite() {
    //console.log("Clicked", this.id);
    if (favourites.includes(this.id)) {
        console.log(this.id, " is in favourites");
        // remove it...
        for (let i = 0; i < favourites.length; i++) {
            if (favourites[i] === this.id) favourites.splice(i, 1); 
        }
        this.style.color = "black";
    } else {
        console.log(this.id, " is not in favourites");
        // Add it:
        favourites.push(this.id);
        this.style.color = "red";
    }
    //console.log(favourites);
    localStorage.setItem("favourites", JSON.stringify(favourites));
}