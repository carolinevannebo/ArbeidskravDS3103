import ArtistModule from "./modules/ArtistModule.js";

const searchBar = document.getElementById('search-bar');
const outputSection = document.getElementById('output-section');

let searchTerm = "";
let artistArray;

/*const search = () => {
    let input = searchBar.value.toLowerCase();
    let filteredArtists = artistArray.filter((a) => a.name.toLowerCase().includes(input));
}*/

const fetchArtists = async () => {
    artistArray = await ArtistModule.getAllArtistsFromArray(
        JSON.parse(ArtistModule.getValueFromLocalStorage("Artists")));
}

const showArtists = async () => {
    outputSection.innerHTML = "";

    await fetchArtists();

    const ul = document.createElement('ul');
    ul.classList.add('artist-list');

    artistArray.filter(artist => 
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())).
        forEach(artist => {
            const li = document.createElement('li');
            li.classList.add('artist-item');

            const artistName = document.createElement('h3');
            artistName.innerText = artist.name;
            artistName.classList.add('artist-name');

            li.appendChild(artistName);
            ul.appendChild(li);
    });

    outputSection.appendChild(ul);
}

//showArtists();

searchBar.addEventListener('input', e => {
    searchTerm = e.target.value;
    showArtists();
});
