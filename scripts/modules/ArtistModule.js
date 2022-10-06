const ArtistModule = ( () => {

    // Private array
    const defaultArray = [
        {name: "Bob Dylan", age: 80, genre: "Rock", topHit: "Like a Rolling Stone", instrument: "Guitar", image: "../media/bob-dylan.webp"},
        {name: "Elvis Presley", age: 85, genre: "Rock", topHit: "Hound Dog", instrument: "Guitar", image: "../media/elvis.webp"},
        {name: "Michael Jackson", age: 60, genre: "Pop", topHit: "Thriller", instrument: "Vocals", image: "../media/michael-jackson.jpeg"},
        {name: "Miles Davis", age: 90, genre: "Jazz", topHit: "So What", instrument: "Trumpet", image: "../media/miles-davis.webp"},
        {name: "Eminem", age: 50, genre: "Hip Hop", topHit: "Lose Yourself", instrument: "Vocals", image: "../media/eminem.jpeg"},
        {name: "Kanye West", age: 45, genre: "Hip Hop", topHit: "Gold Digger", instrument: "Vocals", image: "../media/kanye.avif"},
        {name: "Beyonce", age: 40, genre: "Pop", topHit: "Single Ladies", instrument: "Vocals", image: "../media/beyonce.webp"},
        {name: "Adele", age: 35, genre: "Pop", topHit: "Rolling in the Deep", instrument: "Vocals", image: "../media/adele.jpeg"},
        {name: "Taylor Swift", age: 30, genre: "Pop", topHit: "Shake it Off", instrument: "Vocals", image: "../media/taylor-swift.webp"},
        {name: "Justin Bieber", age: 25, genre: "Pop", topHit: "Baby", instrument: "Vocals", image: "../media/justin-bieber.jpeg"},
        {name: "Ed Sheeran", age: 30, genre: "Pop", topHit: "Shape of You", instrument: "Vocals", image: "../media/ed-sheeran.webp"},
        {name: "Bruno Mars", age: 35, genre: "Pop", topHit: "Uptown Funk", instrument: "Vocals", image: "../media/bruno-mars.avif"},
    ];
    // Private methods

    // Array functions

    const addArtistObjectToArray = (array, object) => {
        return array.push(object);
    }

    const getAllArtistsFromArray = (array) => array.map(
        artist => { return { ...artist } });

    const getAllArtistsFromDefaultArray = () => getAllArtistsFromArray(defaultArray);

    // LocalStorage functions
    const localStorageArrayExists = () => {
        return getValueFromLocalStorage("Artists") === null ? false : true; // If the array does not exist, return false
    }

    const getValueFromLocalStorage = (key) => {
        return localStorage.getItem(key);
    }

    const setValueToLocalStorage = (key, value) => {
        return localStorage.setItem(key, value);
    }

    const addArrayToLocalStorage = (array, object) => { //det er litt dumt å kalle funksjonen for legg array til i localstorage, når den sender objekt til array OG så legger arrayet til i localstorage
        
        if(localStorageArrayExists() === true) {
            array = JSON.parse(getValueFromLocalStorage("Artists"));
        } else {
            array = [];
        }
        
        addArtistObjectToArray(array, object);
        getAllArtistsFromArray(array);
        setValueToLocalStorage("Artists", JSON.stringify(array));
        return array = JSON.parse(getValueFromLocalStorage("Artists"));
    }

    const addDefaultArrayToLocalStorage = (array) => {
        defaultArray.forEach(artist => {
            return addArrayToLocalStorage(array, artist);
        });
    }

    // Public methods
    return {
        addArtistObjectToArray,
        getAllArtistsFromArray,
        getAllArtistsFromDefaultArray,
        getValueFromLocalStorage,
        setValueToLocalStorage,
        addArrayToLocalStorage,
        addDefaultArrayToLocalStorage
    };

})();

export default ArtistModule;

//              ---SPAGHETTI CODE---

// Private methods
/*const _getArtistObject = (name, age, genre, topHit, instrument, image) => {
    return _artist = {name: name, age: age, genre: genre, topHit: topHit, instrument: instrument, image: image};
}

const _addArtistObjectToArray = (array, object) => { // Add artist to array
    return array.push(object);
};

const _getArtist = (artist) => { // Returns an artist object
    return _artists.find((a) => a.name === artist);
};

const _getAllArtistsFromArray = (array) => array.map(
    artist => { return {...artist} });

const _getArtistNames = (name) => { // Returns an array of artist names
    return _artists.filter((a) => a.name === name);
};

const _getArtistByAge = (age) => { // Returns an array of artists with the given age
    return _artists.filter((a) => a.age === age);
};

const _getArtistByGenre = (genre) => { // Returns an array of artists with the given genre
    return _artists.filter((a) => a.genre === genre);
};

const _getArtistByInstrument = (instrument) => { // Returns an array of artists with the given instrument
    return _artists.filter((a) => a.instrument === instrument);
};

const _deleteArtistByName = (name) => { // Deletes an artist from the array
    _artists = _artists.filter((a) => a.name !== name);
};
//map lager array med en valgt property fra hvert element i arrayet
//filter lager array med elementer som oppfyller en gitt betingelse, den tar bort alt som ikke oppfyller betingelsen og returnerer et nytt array

// LocalStorage
const _getValueFromLocalStorage = (key) => {
    return localStorage.getItem(key);
}

const _setValueToLocalStorage = (key, value) => {
    return localStorage.setItem(key, value);
}

const _checkLocalStorage = (array) => {
    const doesArrayExist = getAllMoviesFromMoviesArray(array) === null ? false : true;
    return doesArrayExist;
}

const _addArtistsArrayToLocalStorage = (array, object) => {
    _addArtistObjectToArray(array, object);
    _getAllArtistsFromArray(array);
    _setValueToLocalStorage('Artists', JSON.stringify(array));
    array = JSON.parse(_getValueFromLocalStorage('Artists'));
}

const deleteKeyFromLocalStorage = (key) => {
    return localStorage.removeItem(key);
}

const _saveArtistsToLocalStorage = () => { // Saves artists to local storage
    localStorage.setItem("Artists", JSON.stringify(_artists));
}

const _loadArtistsFromLocalStorage = () => { // Loads artists from local storage
    _artists = JSON.parse(localStorage.getItem("Artists"));
}*/


/*_artists,
        getArtistObject: (name, age, genre, topHit, instrument, image) => _getArtistObject(name, age, genre, topHit, instrument, image),
        addArtist: (artist) => _addArtist(artist),
        getArtist: (artist) => _getArtist(artist),
        getAllArtists: (array) => _getAllArtists(array),
        getArtistNames: (name) => _getArtistNames(name),
        getArtistByAge: (age) => _getArtistByAge(age),
        getArtistByGenre: (genre) => _getArtistByGenre(genre),
        getArtistByInstrument: (instrument) => _getArtistByInstrument(instrument),
        saveArtistsToLocalStorage: () => _saveArtistsToLocalStorage(),
        loadArtistsFromLocalStorage: () => _loadArtistsFromLocalStorage(),
        deleteArtistByName: (name) => _deleteArtistByName(name)*/