'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

/*
// for making Map
var map = L.map('map').setView([51.505, -0.09], 13); //zoom = 13

// for Map presentation
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19;
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// for Marker
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

// for Popup
var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);

// for event management
var popup = L.popup();

function onMapClick(e) {
    popup.setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

*/

// steps running 1Km = 1045

// View/Unhide form
/*
function formView() {
  form.classList.toggle('hidden');
}
*/

// toggle Cadence/Elevation
/*
function toggleCadElev() {
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
}
*/
let type;
let zoom = 13;
let coOrdinates;

// find type for Workout
/*
function typeWorkout (){
  if (inputCadence.closest('.form__row').classList.contains('form__row--hidden')) type = 'Cycling';
  if (inputElevation.closest('.form__row').classList.contains('form__row--hidden')) type = 'Running';
  console.log(type);
}
typeWorkout();
*/

// changing Running/Cycling and toggle Cadence/Elevation
/*
inputType.addEventListener('change', function () {
//  console.log(inputType.classList.value);
  toggleCadElev();
  typeWorkout();
  
});
*/

// Create a map
function createMap(coOrdinates, z){
  return L.map('map').setView(coOrdinates, z);
}
// Tile map layer
// for localized map replace 'org' with 'in/hot/'
function createTileLayer(map){
  return L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
}

// create marker on map
function createMarker(coOrdinates, map){
  return L.marker(coOrdinates).addTo(map);
}
/*
class workOut {
  date = Date.now();
  id = (date+'').slice(-10);
  //console.log(_id);

  constructor(coords,distance,duration){
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDesc () {
    const workoutTitle = `${type} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    return workoutTitle;
  }

  
}
*/

// callback fn to click on map eventlistener
/*
function mouseClick (e){
  // console.log(e);

  const {lat, lng} = e.latlng;
  console.log('lat '+ lat+', lng '+ lng);
  formView();
}
*/



// load map on page
function loadMap(position) {
  console.log(position);

  const {latitude, longitude} = position.coords;
  coOrdinates = [latitude, longitude];
  console.log(coOrdinates);

  const map = createMap(coOrdinates, zoom);
  console.log(map);

  createTileLayer(map);

  const marker = createMarker(coOrdinates, map);
  //add popup
  marker.bindPopup(`Your location <br> Latitude: ${latitude.toFixed(2)},<br> Longitude: ${longitude.toFixed(2)}`)
  .openPopup();

//  map.on('click', mouseClick);

}
console.log(map);

function showGeoLocation() {
  navigator.geolocation.getCurrentPosition(
    loadMap,
    function () {
      alert('Access to location not allowed.');
    }
  );
}

showGeoLocation();



