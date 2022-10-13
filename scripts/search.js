import ArtistModule from "./modules/ArtistModule.js";

const searchBar = document.getElementById('search-bar');
const outputSection = document.getElementById('output-section');

let searchTerm = "";
let artistArray;

const fetchArtists = async () => { // Async gjør at funksjonen venter på at "promise" skal bli ferdig før den kjører, i dette tilfellet vil det si at den venter på at localstorage skal bli fylt med arrayet
    artistArray = await ArtistModule.getAllArtistsFromArray(
        JSON.parse(ArtistModule.getValueFromLocalStorage("Artists")));
}

const showArtists = async () => { // Funksjonen venter på at fetchArtists skal bli ferdig før den kjører
    outputSection.innerHTML = "";

    await fetchArtists();

    const ul = document.createElement('ul'); // Lager et element av typen ul
    ul.classList.add('artist-list'); // Gir den en klasse

    artistArray.filter(artist => // Funksjonen filterer arrayet etter navn, og hvis navnet inneholder søkeordet, så kjører den koden under
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())).
        forEach(artist => {
            const li = document.createElement('li');
            li.classList.add('artist-item');

            const artistName = document.createElement('h3');
            artistName.innerText = artist.name;
            artistName.classList.add('artist-name');

            /*const artistLink = document.createElement('a');
            artistLink.href = `./indexShowAll#${artist.id}`;
            artistLink.innerText = "Show artist";
            artistLink.classList.add('artist-link');*/

            li.appendChild(artistName); // Legger til artistName som child til li
            //li.appendChild(artistLink); // Legger til artistLink som child til li
            ul.appendChild(li); // li blir da child til ul
    });

    outputSection.appendChild(ul); // og ul blir child til outputSection :)

    !searchTerm ? ul.style.display = "none" : ul.style.display = "block"; // Hvis søkeordet er tomt, så vil ul ikke vises, hvis det ikke er tomt, så vil den vises
}

searchBar.addEventListener('input', e => { // Lytter etter input i søkefeltet
    searchTerm = e.target.value; // Setter søkeordet lik verdien i søkefeltet
    showArtists();
});
