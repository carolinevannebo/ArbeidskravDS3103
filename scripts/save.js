import ArtistModule from "./modules/ArtistModule.js";

const inputName = document.querySelector("#input-name");
const inputAge = document.querySelector("#input-age");
const inputGenre = document.querySelector("#input-genre");
const inputTopHit = document.querySelector("#input-top-hit");
const inputInstrument = document.querySelector("#input-instrument");
const inputImage = document.querySelector("#input-image");
const saveBtn = document.querySelector("#save-btn");

let name = inputName.value;
let age = inputAge.value;
let genre = inputGenre.value;
let topHit = inputTopHit.value;
let instrument = inputInstrument.value;
let image = inputImage.value;

let artistObject = ArtistModule.getArtistObject(name, age, genre, topHit, instrument, image);

const saveArtist = () => {
    ArtistModule.addArtist(artistObject);
    ArtistModule.saveArtistsToLocalStorage();
}

saveBtn.addEventListener("click", saveArtist());