import ArtistModule from "./modules/ArtistModule.js";
import GenreModule from "./modules/GenreModule.js";

const inputArtist = document.querySelector('#input-artist');
const updateBtn = document.querySelector('#update-btn');
const deleteBtn = document.querySelector('#delete-btn');
const outputSection = document.querySelector('#output-section');

/*let artistArray = ArtistModule.getAllArtistsFromArray(
    JSON.parse(ArtistModule.getValueFromLocalStorage("Artists")));*/

let artistArray = JSON.parse(ArtistModule.getValueFromLocalStorage("Artists")); // bør tydeligvis ikke være global, men lokal


const fetchArtist = (artistName) => {
    return artistArray.find(artist => artist.name.toLowerCase() === artistName.value.toLowerCase());
}

const getArtistByName = () => { // bruker ikke enda
    let artistsByName = ArtistModule.getAllArtistsByNameArray(artistArray, inputArtist.value);
    return artistsByName;
}

const validateInput = (input) => {
    if (!input.value || fetchArtist(input) === undefined) {
        input.classList.add('invalid');
        return false;
    } else {
        input.classList.remove('invalid');
        return true;
    }
}

const deleteArtist = (artist) => {
    if (validateInput(artist) === true) {
        removeArtistFromArrayAndUpdateLocalStorage();
        outputSection.innerHTML = "Artist deleted";
    } else if (validateInput(artist) === false) {
        outputSection.innerHTML = "Artist not found";
    }
}

const updateArtist = (artist) => {
    if (validateInput(artist) === true) {
        createUpdateForm(fetchArtist(artist));
    } else if (validateInput(artist) === false) {
        outputSection.innerHTML = "Artist not found";
    }
}

const removeArtistFromArrayAndUpdateLocalStorage = () => { // mi amor <3
    artistArray.splice(artistArray.indexOf(fetchArtist(inputArtist)), 1);
    ArtistModule.setValueToLocalStorage('Artists', JSON.stringify(artistArray));
}

const createUpdateForm = (artist) => {
    outputSection.innerHTML = "";

    const form = document.createElement('form');
    form.classList.add('update-form');

    const artistName = document.createElement('input');
    artistName.setAttribute('type', 'text');
    artistName.setAttribute('placeholder', 'Artist Name');
    artistName.setAttribute('id', 'new-artist-name');
    artistName.setAttribute('value', artist.name);
    artistName.classList.add('input-field');

    const artistAge = document.createElement('input');
    artistAge.setAttribute('type', 'number');
    artistAge.setAttribute('placeholder', 'Artist Age');
    artistAge.setAttribute('id', 'new-artist-age');
    artistAge.setAttribute('value', artist.age);
    artistAge.classList.add('input-field');

    const artistGenre = document.createElement('input');
    artistGenre.setAttribute('type', 'text');
    artistGenre.setAttribute('placeholder', 'Artist Genre');
    artistGenre.setAttribute('id', 'new-artist-genre');
    artistGenre.setAttribute('value', artist.genre);
    artistGenre.classList.add('input-field');

    const artistTopHit = document.createElement('input');
    artistTopHit.setAttribute('type', 'text');
    artistTopHit.setAttribute('placeholder', 'Artist Top Hit');
    artistTopHit.setAttribute('id', 'new-artist-top-hit');
    artistTopHit.setAttribute('value', artist.topHit);
    artistTopHit.classList.add('input-field');

    const artistInstrument = document.createElement('input');
    artistInstrument.setAttribute('type', 'text');
    artistInstrument.setAttribute('placeholder', 'Artist Instrument');
    artistInstrument.setAttribute('id', 'new-artist-instrument');
    artistInstrument.setAttribute('value', artist.instrument);
    artistInstrument.classList.add('input-field');

    const artistImage = document.createElement('input');
    artistImage.setAttribute('type', 'text');
    artistImage.setAttribute('placeholder', 'Artist Image');
    artistImage.setAttribute('id', 'new-artist-image');
    artistImage.setAttribute('value', artist.image);
    artistImage.classList.add('input-field');

    const saveBtn = document.createElement('input');
    saveBtn.setAttribute('type', 'button');
    saveBtn.setAttribute('id', 'submit-btn');
    saveBtn.setAttribute('value', 'Save');
    saveBtn.innerText = 'Submit';
    saveBtn.classList.add('btn');

    form.appendChild(artistName);
    form.appendChild(artistAge);
    form.appendChild(artistGenre);
    form.appendChild(artistTopHit);
    form.appendChild(artistInstrument);
    form.appendChild(artistImage);
    form.appendChild(saveBtn);

    outputSection.appendChild(form);

    saveBtn.addEventListener('click', () => { // mangler nå input validering, BRUK DE DU LAGDE I SAVE
        validateNewInput();
    });
}

const validateNewInput = () => {
    if (GenreModule.isGenreValid(document.querySelector('#new-artist-genre').value) === false || ArtistModule.isImageUrl(document.querySelector('#new-artist-image').value) === false) {
        alert('Invalid input');
    } else {
        updateArtistInArrayAndUpdateLocalStorage();
    }
}

const getDataFromForm = () => {
    const newArtistName = document.querySelector('#new-artist-name');
    const newArtistAge = document.querySelector('#new-artist-age');
    const newArtistGenre = document.querySelector('#new-artist-genre');
    const newArtistTopHit = document.querySelector('#new-artist-top-hit');
    const newArtistInstrument = document.querySelector('#new-artist-instrument');
    const newArtistImage = document.querySelector('#new-artist-image');

    //bør kanskje hente hele recordet fra localstorage og refere til det, og så oppdatere det ?

    const newArtist = { // må fikse at dersom en av verdiene under er tom eller invalid, så skal den ikke bli lagt til, men ta fra det som allerede er lagret
        name: newArtistName.value,
        age: newArtistAge.value,
        genre: newArtistGenre.value,
        topHit: newArtistTopHit.value,
        instrument: newArtistInstrument.value,
        image: newArtistImage.value
    }

    return newArtist;
}

const updateArtistInArrayAndUpdateLocalStorage = () => {
    artistArray.splice(artistArray.indexOf(fetchArtist(inputArtist)), 1, getDataFromForm());
    ArtistModule.setValueToLocalStorage('Artists', JSON.stringify(artistArray));
}

updateBtn.addEventListener('click', () => {
    updateArtist(inputArtist);
});

deleteBtn.addEventListener('click', () => { 
    deleteArtist(inputArtist);
});