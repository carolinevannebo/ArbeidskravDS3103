const inputArtist = document.querySelector('#input-artist');
const modifyBtn = document.querySelector('#modify-btn');
const deleteBtn = document.querySelector('#delete-btn');
const outputSection = document.querySelector('#output-section');

let artistArray = ArtistModule.getAllArtistsFromArray(
    JSON.parse(ArtistModule.getValueFromLocalStorage("Artists")));

const validateInput = (input) => {
    if (input.value === "") { // du må også sjekke at input.value finnes i det hele tatt
        input.classList.add('invalid');
        return false;
    } else {
        input.classList.remove('invalid');
        return true;
    }
}

const fetchArtist = (artistName) => {
    return artistArray.find(artist => artist.name.toLowerCase() === artistName.toLowerCase());
}

const init = () => {
    // hvis validateInput returnerer false, eller fetchArtist returnerer undefined, så vil ikke koden under kjøre
    // deleteBtn => deleteArtist()
    // modifyBtn => createUpdateForm() + submitBtn => updateArtist()
}

const updateArtist = (artist) => {
    // finn artisten i arrayet
    // oppdater verdier
    // lagre arrayet i localstorage
}


const createUpdateForm = () => {
    const form = document.createElement('form');
    form.classList.add('update-form');

    const artistName = document.createElement('input');
    artistName.setAttribute('type', 'text');
    artistName.setAttribute('placeholder', 'Artist Name');
    artistName.setAttribute('id', 'artist-name');
    artistName.classList.add('input-field');

    const artistAge = document.createElement('input');
    artistAge.setAttribute('type', 'number');
    artistAge.setAttribute('placeholder', 'Artist Age');
    artistAge.setAttribute('id', 'artist-age');
    artistAge.classList.add('input-field');

    const artistGenre = document.createElement('input');
    artistGenre.setAttribute('type', 'text');
    artistGenre.setAttribute('placeholder', 'Artist Genre');
    artistGenre.setAttribute('id', 'artist-genre');
    artistGenre.classList.add('input-field');

    const artistTopHit = document.createElement('input');
    artistTopHit.setAttribute('type', 'text');
    artistTopHit.setAttribute('placeholder', 'Artist Top Hit');
    artistTopHit.setAttribute('id', 'artist-top-hit');
    artistTopHit.classList.add('input-field');

    const artistInstrument = document.createElement('input');
    artistInstrument.setAttribute('type', 'text');
    artistInstrument.setAttribute('placeholder', 'Artist Instrument');
    artistInstrument.setAttribute('id', 'artist-instrument');
    artistInstrument.classList.add('input-field');

    const artistImage = document.createElement('input');
    artistImage.setAttribute('type', 'text');
    artistImage.setAttribute('placeholder', 'Artist Image');
    artistImage.setAttribute('id', 'artist-image');
    artistImage.classList.add('input-field');

    const submitBtn = document.createElement('input'); // er litt teit å kalle det submit når det er en update knapp
    submitBtn.setAttribute('type', 'button');
    submitBtn.setAttribute('id', 'submit-btn');
    submitBtn.innerText = 'Submit';
    submitBtn.classList.add('btn');

    form.appendChild(artistName);
    form.appendChild(artistAge);
    form.appendChild(artistGenre);
    form.appendChild(artistTopHit);
    form.appendChild(artistInstrument);
    form.appendChild(artistImage);
    form.appendChild(submitBtn);

    outputSection.appendChild(form);
}

modifyBtn.addEventListener('click', createUpdateForm);