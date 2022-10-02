import ArtistModule from './modules/ArtistModule.js';

const inputName = document.querySelector('#input-name');
const inputAge = document.querySelector('#input-age');
const inputGenre = document.querySelector('#input-genre');
const inputTopHit = document.querySelector('#input-top-hit');
const inputInstrument = document.querySelector('#input-instrument');
const inputImage = document.querySelector('#input-image');
const saveBtn = document.querySelector('#save-btn');

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
}


saveBtn.addEventListener('click', saveInputToLocalStorage);