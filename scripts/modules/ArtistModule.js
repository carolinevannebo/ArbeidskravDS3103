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

    const getAllArtistsByNameArray = (array, inputValue) => {
        let artistsByName = array.filter(
            artist => artist.name === inputValue);
        return artistsByName;
    }
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

    const addArrayToLocalStorage = (array, object) => { //det er litt dumt å kalle funksjonen for legg array til i localstorage, når den sender objekt til array OG så legger arrayet til i localstorage?
        
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

    // Validation functions

    const isImageUrl = (url) => {  // Sjekker om url er et bilde
        return(url.match(/\.(jpeg|jpg|gif|png|webp|svg|avif)$/) != null);
    }

    // Public methods
    return {
        addArtistObjectToArray,
        getAllArtistsFromArray,
        getAllArtistsFromDefaultArray,
        getAllArtistsByNameArray,
        getValueFromLocalStorage,
        setValueToLocalStorage,
        addArrayToLocalStorage,
        addDefaultArrayToLocalStorage,
        isImageUrl
    };

})();

export default ArtistModule;
