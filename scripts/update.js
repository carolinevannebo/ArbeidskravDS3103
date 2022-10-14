import ArtistModule from "./modules/ArtistModule.js";
import GenreModule from "./modules/GenreModule.js";

const inputArtist = document.querySelector('#input-artist');
const updateBtn = document.querySelector('#update-btn');
const deleteBtn = document.querySelector('#delete-btn');
const outputSection = document.querySelector('#output-section');

let artistArray = JSON.parse(ArtistModule.getValueFromLocalStorage("Artists")); // bør tydeligvis ikke være global, men lokal? Undersøk mer om forskjellene i et større prosjekt

const fetchArtist = (artistName) => { // Returnerer true hvis inputverdien matcher en artist i lokalstorage
    return artistArray.find(artist => artist.name.toLowerCase() === artistName.value.toLowerCase());
}

const validateInput = (input) => {
    if (!input.value || fetchArtist(input) === undefined) {
        input.classList.add('invalid'); // Plan: stilsett klassen .invalid i css
        return false;
    } else {
        input.classList.remove('invalid');
        return true;
    }
}

const deleteArtist = (artist) => { // Kalles når delete-knappen trykkes
    if (validateInput(artist) === true) { // Sjekker om artisten finnes
        removeArtistFromArrayAndUpdateLocalStorage();
        outputSection.innerHTML = "Artist deleted";
    } else if (validateInput(artist) === false) {
        outputSection.innerHTML = "Artist not found";
    }
}

const updateArtist = (artist) => { // Kalles når update-knappen trykkes
    if (validateInput(artist) === true) { // Sjekker om artisten finnes
        createUpdateForm(fetchArtist(artist)); // Lager et form for å oppdatere artisten
    } else if (validateInput(artist) === false) {
        outputSection.innerHTML = "Artist not found";
    }
}

const removeArtistFromArrayAndUpdateLocalStorage = () => { // Manipulerer arrayet og setter det som ny verdi til localstorage
    artistArray.splice(artistArray.indexOf(fetchArtist(inputArtist)), 1);
    ArtistModule.setValueToLocalStorage('Artists', JSON.stringify(artistArray));
}

const createUpdateForm = (artist) => {
    outputSection.innerHTML = "";

    const form = document.createElement('form');
    form.classList.add('update-form');
    form.classList.add('container-fluid');
    form.classList.add('row');
    form.classList.add('p-4');

    const artistName = document.createElement('input');
    artistName.setAttribute('type', 'text');
    artistName.setAttribute('placeholder', 'Artist Name');
    artistName.setAttribute('id', 'new-artist-name');
    artistName.setAttribute('value', artist.name);
    artistName.classList.add('input-field');
    artistName.classList.add('col-2');
    artistName.classList.add('p-1');

    const artistAge = document.createElement('input');
    artistAge.setAttribute('type', 'number');
    artistAge.setAttribute('placeholder', 'Artist Age');
    artistAge.setAttribute('id', 'new-artist-age');
    artistAge.setAttribute('value', artist.age);
    artistAge.classList.add('input-field');
    artistAge.classList.add('col-2');

    const artistGenre = document.createElement('input');
    artistGenre.setAttribute('type', 'text');
    artistGenre.setAttribute('placeholder', 'Artist Genre');
    artistGenre.setAttribute('id', 'new-artist-genre');
    artistGenre.setAttribute('value', artist.genre);
    artistGenre.classList.add('input-field');
    artistGenre.classList.add('col-2');

    const artistTopHit = document.createElement('input');
    artistTopHit.setAttribute('type', 'text');
    artistTopHit.setAttribute('placeholder', 'Artist Top Hit');
    artistTopHit.setAttribute('id', 'new-artist-top-hit');
    artistTopHit.setAttribute('value', artist.topHit);
    artistTopHit.classList.add('input-field');
    artistTopHit.classList.add('col-2');

    const artistInstrument = document.createElement('input');
    artistInstrument.setAttribute('type', 'text');
    artistInstrument.setAttribute('placeholder', 'Artist Instrument');
    artistInstrument.setAttribute('id', 'new-artist-instrument');
    artistInstrument.setAttribute('value', artist.instrument);
    artistInstrument.classList.add('input-field');
    artistInstrument.classList.add('col-2');

    const artistImage = document.createElement('input');
    artistImage.setAttribute('type', 'text');
    artistImage.setAttribute('placeholder', 'Artist Image');
    artistImage.setAttribute('id', 'new-artist-image');
    artistImage.setAttribute('value', artist.image);
    artistImage.classList.add('input-field');
    artistImage.classList.add('col-2');

    const saveBtn = document.createElement('input');
    saveBtn.setAttribute('type', 'button');
    saveBtn.setAttribute('id', 'submit-btn');
    saveBtn.setAttribute('value', 'Save');
    saveBtn.innerText = 'Submit';
    saveBtn.classList.add('btn');
    saveBtn.classList.add('btn-danger');
    saveBtn.classList.add('col-12');
    saveBtn.classList.add('mt-2');

    const outputDiv = document.createElement('div');
    outputDiv.setAttribute('id', 'output-div');

    form.appendChild(artistName);
    form.appendChild(artistAge);
    form.appendChild(artistGenre);
    form.appendChild(artistTopHit);
    form.appendChild(artistInstrument);
    form.appendChild(artistImage);
    form.appendChild(saveBtn);

    outputSection.appendChild(form);
    outputSection.appendChild(outputDiv);

    saveBtn.addEventListener('click', () => {
        validateNewInput();
    });
}

const validateNewInput = () => { // Dersom noen inputfelt i det nye skjemaet et tomme, sjanger er ugyldig eller link ikke er et bilde, skrives feilmelding ut, ellers oppdateres artisten
    let newArtistName = document.querySelector('#new-artist-name');
    let newArtistAge = document.querySelector('#new-artist-age');
    let newArtistGenre = document.querySelector('#new-artist-genre');
    let newArtistTopHit = document.querySelector('#new-artist-top-hit');
    let newArtistInstrument = document.querySelector('#new-artist-instrument');
    let newArtistImage = document.querySelector('#new-artist-image');
    let outputDiv = document.querySelector('#output-div');

    !newArtistName.value || !newArtistAge.value || 
    !newArtistGenre.value || !newArtistTopHit.value || 
    !newArtistInstrument.value || !newArtistImage.value ?
        outputDiv.innerHTML = "Please fill out all fields" :
            GenreModule.isGenreValid(document.querySelector('#new-artist-genre').value) === false || 
            ArtistModule.isImageUrl(document.querySelector('#new-artist-image').value) === false ?
                outputDiv.innerHTML = "Invalid input" :
                    updateArtistInArrayAndUpdateLocalStorage(),
                    outputDiv.innerHTML = "Artist updated";
}

const getDataFromForm = () => {
    const newArtistName = document.querySelector('#new-artist-name');
    const newArtistAge = document.querySelector('#new-artist-age');
    const newArtistGenre = document.querySelector('#new-artist-genre');
    const newArtistTopHit = document.querySelector('#new-artist-top-hit');
    const newArtistInstrument = document.querySelector('#new-artist-instrument');
    const newArtistImage = document.querySelector('#new-artist-image');

    const newArtist = {
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
} /*bruker splice for å modifisere arrayet, bruker indexOf for å finne indexen til artisten som skal endres,
    fetchArtist for å definere artisten sin index å finne, 1 for å slette 1 element,
    og getDataFromForm for å legge til det nye elementet, så settes ny verdi til lokalstorage*/

updateBtn.addEventListener('click', () => {
    updateArtist(inputArtist);
});

deleteBtn.addEventListener('click', () => { 
    deleteArtist(inputArtist);
});