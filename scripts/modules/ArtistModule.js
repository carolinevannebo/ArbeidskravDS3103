const ArtistModule = ( () => {

    // Private variables
    let _artists = [];
    let _artist = {id: 0, name: "", age: 0, genre: "", topHit: "", instrument: "", image: ""};

    // Private methods
    const _addArtist = (artist) => { // Add artist to array
        _artists.push(artist);
    };

    const _getArtist = (artist) => { // Returns an artist object
        return _artists.find((a) => a.name === artist);
    };

    const _getArtists = () => { // Returns a copy of the array
        return _artists;
    };

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

    //map lager array med en valgt property fra hvert element i arrayet
    //filter lager array med elementer som oppfyller en gitt betingelse, den tar bort alt som ikke oppfyller betingelsen og returnerer et nytt array

    // LocalStorage

    const _saveArtists = () => { // Saves artists to local storage
        localStorage.setItem("artists", JSON.stringify(_artists));
    };

    const _loadArtists = () => { // Loads artists from local storage
        _artists = JSON.parse(localStorage.getItem("artists"));
    };

    const _deleteArtistByName = (name) => { // Deletes an artist from the array
        _artists = _artists.filter((a) => a.name !== name);
    };
    

    // Public methods
    return {
        addArtist: (artist) => _addArtist(artist),
        getArtist: (artist) => _getArtist(artist),
        getArtists: () => _getArtists(),
        getArtistNames: (name) => _getArtistNames(name),
        getArtistByAge: (age) => _getArtistByAge(age),
        getArtistByGenre: (genre) => _getArtistByGenre(genre),
        getArtistByInstrument: (instrument) => _getArtistByInstrument(instrument),
        saveArtists: () => _saveArtists(),
        loadArtists: () => _loadArtists(),
        deleteArtistByName: (name) => _deleteArtistByName(name)
    };

})();

export default ArtistModule;