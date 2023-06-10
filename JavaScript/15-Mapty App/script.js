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
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
*/

function formView() {
  form.classList.toggle('hidden');
}

function toggleCadElev() {
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
}

let type;
let zoom = 13;

function typeWorkout (){
  if (inputCadence.closest('.form__row').classList.contains('form__row--hidden')) type = 'cycling';
  if (inputElevation.closest('.form__row').classList.contains('form__row--hidden')) type = 'running';
  console.log(type);
}
typeWorkout();

inputType.addEventListener('change', function () {
//  console.log(inputType.classList.value);
  toggleCadElev();
  typeWorkout();
  
});

function createMap(lat, lng, z){
  return L.map('map').setView([lat, lng], z);
}

function createTileLayer(map){
  return L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
}

function createMarker(lat, lng, map){
  return L.marker([lat, lng]).addTo(map);
}

function workOut(){
  
}



function mouseClick (e){
//  console.log(e);

  const {lat, lng} = e.latlng;
  console.log('lat '+ lat+', lng '+ lng);
  formView();

}

function loadMap(pos) {
  console.log(pos);

  const {latitude, longitude} = pos.coords;
  console.log('lat '+ latitude+', lng '+ longitude);

  let map = createMap(latitude, longitude, zoom);

  createTileLayer(map);

  const marker = createMarker(latitude, longitude, map);
  //add popup
  marker.bindPopup(`Latitude: ${latitude.toFixed(2)},<br> Longitude: ${longitude.toFixed(2)}`)
  .openPopup();

  map.on('click', mouseClick);

}


function showGeoLocation() {
  navigator.geolocation.getCurrentPosition(
    loadMap,
    //alert('Please allow access to your location.')
  );
}

showGeoLocation();


