const COORDS = 'coords';
const API_KEY = "3de84853ea48c68beece5ddf5eeba2d8"

function handleGeoError(){
    console.log("GeoError");
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    
    if(loadedCords === null){
        askForCoords();
    } else{
        // getWeather    
    }
}

function init(){
    loadCoords();
}

init();