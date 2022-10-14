import ArtistModule from "./modules/ArtistModule.js";

const showAllBtn = document.querySelector('#show-all-btn');
const outputDiv = document.querySelector('#output-div');

outputDiv.style.display = "none";

let artistArray = ArtistModule.getAllArtistsFromArray(
    JSON.parse(ArtistModule.getValueFromLocalStorage("Artists")));

const printArtists = (array) => {
    let htmlTxt = "";

    array.forEach((artist) => {
        htmlTxt += `
        <article class="artist-article" id="${array.indexOf(artist)}">

            <div class="contain-img">
                <img src="${artist.image}" alt="${artist.name}">
            </div>

            <div class="artist-info">
                <h2 class="artist-title">${artist.name}</h2>
                <p>Age: ${artist.age}
                    <br>Genre: ${artist.genre}
                    <br>Top Hit: ${artist.topHit}
                    <br>Instrument: ${artist.instrument}
                </p>
            </div>
        </article>`;
    });
    let wrapper = `<div class="wrapper">${htmlTxt}</div>`;
    outputDiv.innerHTML = wrapper;
    showAllBtn.style.display = "none";
    outputDiv.style.display = "block";
}

showAllBtn.addEventListener('click', () => {
    printArtists(artistArray);
});

/* Bør lage en funksjon som kalles når knappen trykkes på (ved siden av artistnavnet) som sender brukeren til update siden, med infoen skrevet ferdig
   Problem: hvordan får jeg tak i artikkelen som ikke eksisteres før knappen trykkes på?
*/