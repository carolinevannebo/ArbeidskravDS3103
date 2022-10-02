import ArtistModule from './modules/ArtistModule.js';
import spotifyGenres from '../generesAsArray.txt';

const inputName = document.querySelector('#input-name');
const inputAge = document.querySelector('#input-age');
const inputGenre = document.querySelector('#input-genre');
const inputTopHit = document.querySelector('#input-top-hit');
const inputInstrument = document.querySelector('#input-instrument');
const inputImage = document.querySelector('#input-image');
const saveBtn = document.querySelector('#save-btn');
const outputDiv = document.querySelector('#output-div');

let artistsArray;

const saveInputToLocalStorage = () => {
    const name = inputName.value;
    const age = inputAge.value;
    const genre = inputGenre.value;
    const topHit = inputTopHit.value;
    const instrument = inputInstrument.value;
    const image = inputImage.value;
    
    const artistObject = {name: name, age: age, genre: genre, topHit: topHit, instrument: instrument, image: image};

    ArtistModule.addArrayToLocalStorage(artistsArray, artistObject);
    outputDiv.innerHTML = "Artist added to list";
}

const validateInput = () => { // Kan du få til å ikke repetere inputfeltene her?
    const name = inputName.value;
    const age = inputAge.value;
    const genre = inputGenre.value;
    const topHit = inputTopHit.value;
    const instrument = inputInstrument.value;
    const image = inputImage.value;

    !name || !age || !genre || !topHit || !instrument || !image 
        ? outputDiv.innerHTML = "Please fill out all fields" :
            isImageUrl(image) === false ? outputDiv.innerHTML = "Please enter a valid image url" :
                saveInputToLocalStorage();
}

const isImageUrl = (url) => {
    return(url.match(/^https?:\/\/.+\.(jpeg|jpg|gif|png|webp|svg|avif)$/) != null);
}

const generateArrayOfGenres = () => {
    const genresArray = spotifyGenres;
    return genresArray;
}

saveBtn.addEventListener('click', saveInputToLocalStorage);