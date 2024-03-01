/**
 * NOTE: This is not the best way to add a menu, 
 * but it does work...kind of.
 */

const navElement = document.querySelector("nav#menu");
makeMenu(navElement);

function makeMenu(nav) {
    const links = `
    <ul>
        <li><a href="amiibo-filter.html">Amiibo Filter Search</a></li>
        <li><a href="amiibo-favourites.html">Amiibo Favourites</a></li>
    </ul>`;
    nav.innerHTML = links;
}