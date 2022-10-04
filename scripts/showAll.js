import ArtistModule from "./modules/ArtistModule.js";

const showAllBtn = document.querySelector('#show-all-btn');
const outputDiv = document.querySelector('#output-div');

let artistArray = ArtistModule.getAllArtistsFromArray(
    JSON.parse(ArtistModule.getValueFromLocalStorage("Artists"))); //du bør sjekke om du kan hente uten å parse

const printArtists = (array) => {
    let htmlTxt = "";
    array.forEach((artist) => {
        htmlTxt += `
        <article>
            <img src="${artist.image}" alt="${artist.name}">
            <h2 class="artist-title">${artist.name}</h2>
            <p>Age: ${artist.age}
                <br>Genre: ${artist.genre}
                <br>Top Hit: ${artist.topHit}
                <br>Instrument: ${artist.instrument}
            </p>
        </article>`;
    });
    outputDiv.innerHTML = htmlTxt;
}

showAllBtn.addEventListener('click', () => {
    printArtists(artistArray);
});