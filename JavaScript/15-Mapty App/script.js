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
    maxZoom: 19; //for more options look documentation
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
//----------------------------------------------

class workOut {
  date = new Date();
  id = +(Date.now() + '').slice(-10);
  //console.log(_id);

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = +distance;
    this.duration = +duration;
  }

  desc;
  setDesc() {
    this.desc = `${this.type} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  clicks = 0;
  click() {
    this.clicks++;
  }
}
// const workout = new workOut();

class Cycling extends workOut {
  type = 'Cycling';
  speed;

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = +elevationGain;
    this.setDesc();
    this.calcSpeed();
  }

  calcSpeed() {
    this.speed = +(this.distance / (this.duration / 60)).toFixed(1);
  }
}

class Running extends workOut {
  type = 'Running';
  pace;

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration, cadence);
    this.cadence = +cadence;
    this.setDesc();
    this.calcPace();
  }

  calcPace() {
    this.pace = +(this.duration / this.distance).toFixed(1);
  }
}

// let type;
class App {
  zoom = 13;
  map;
  workouts = [];
  mapEvent;
  curWork;

  constructor() {
    // this.zoom;
    this.showGeoLocation();
    this.inputTypeEvLis();
    this.submitListener();
    this.clickMovePopup();
  }

  // View/Unhide form
  formView() {
    form.classList.remove('hidden');
    inputDistance.focus();
  }
  formHide() {
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  // toggle Cadence/Elevation
  toggleCadElev() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }

  // changing Running/Cycling and toggle Cadence/Elevation
  inputTypeEvLis() {
    inputType.addEventListener('change', () => {
      this.toggleCadElev();
    });
  }

  setLocalStorage() {
    localStorage.setItem('workoutsStorage', JSON.stringify(self.workouts));
    // setItem(key,value)
  }

  getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workoutsStorage'));
    if (!data) return;
    this.workouts = data;
    this.workouts.forEach(work => {
      this.curWork = work;
      console.log(this.curWork.coords);
      console.log(this.map);
      this.renderMarker(this.curWork.coords, this.map);
      this.renderWorkout(this.curWork);
    });
  }

  clearLocalStorage() {
    localStorage.removeItem('workoutsStorage');
    location.reload();
  }

  renderWorkout(works) {
    let html = '';
    if (works.type === 'Running') {
      html = `<li class="workout workout--running" data-id="${works.id}">
      <h2 class="workout__title">${works.desc}</h2>
        <div class="workout__details">
          <span class="workout__icon">🏃‍♂️</span>
          <span class="workout__value">${works.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${works.duration}</span>
          <span class="workout__unit">min</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${works.pace}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${works.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
     </li>`;
    }
    if (works.type === 'Cycling') {
      html = `<li class="workout workout--cycling" data-id="${works.id}">
      <h2 class="workout__title">${works.desc}</h2>
      <div class="workout__details">
        <span class="workout__icon">🚴‍♀️</span>
        <span class="workout__value">${works.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${works.duration}</span>
        <span class="workout__unit">min</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${works.speed}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${works.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>`;
    }

    form.insertAdjacentHTML('afterend', html);
  }

  //Create popup
  // popup = 'A pretty CSS popup.<br> Easily customizable.';
  popup = function () {
    const typePopup =
      this.curWork.type === 'Running' ? 'running-popup' : 'cycling-popup';

    const typeEmoji = this.curWork.type === 'Running' ? '🏃‍♂️' : '🚴‍♀️';
    const description = this.curWork.desc;

    return L.popup({
      maxWidth: 250,
      minWidth: 100,
      closeOnClick: false,
      autoClose: false,
      className: typePopup,
      content: `${typeEmoji} ${description}`,
    });
  };

  // create marker on map
  renderMarker(coOrdinates, map) {
    console.log(this);
    // this.typeWorkout();
    return L.marker(coOrdinates).addTo(map).bindPopup(this.popup()).openPopup();
  }

  moveToPopup(event) {
    if (!this.map) return;
    const eventWorkout = event.target.closest('.workout');
    console.log(eventWorkout.dataset.id);
    if (!eventWorkout) return;
    console.log(this.workouts);
    const workO = this.workouts.find(
      work => work.id === Number(eventWorkout.dataset.id)
    );
    console.dir(workO);
    this.map.setView(workO.coords, this.zoom, {
      animate: true,
      pan: { duration: 1 },
    });
    // workO.click(); //counting clicks on workout
  }

  clickMovePopup() {
    containerWorkouts.addEventListener('click', this.moveToPopup.bind(this));
  }

  // Create a map
  createMap(coOrds, z) {
    //'map' is id
    return L.map('map').setView(coOrds, z);
  }

  // Tile map layer
  // for localized map replace 'org' with for example 'in/hot/'
  createTileLayer(map) {
    return L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }

  createWorkout() {
    // let neWork;
    // e.preventDefault();
    const coord = self.mapEvent.latlng;
    const dist = inputDistance.value;
    inputDistance.value = '';
    const dur = inputDuration.value;
    inputDuration.value = '';
    if (inputType.value === 'running') {
      const cad = inputCadence.value;
      inputCadence.value = '';
      this.curWork = new Running(coord, dist, dur, cad);

      // const pace = neWork.calcPace();
    }
    if (inputType.value === 'cycling') {
      const elev = inputElevation.value;
      inputElevation.value = '';
      this.curWork = new Cycling(coord, dist, dur, elev);

      // const speed = neWork.calcSpeed();
    }
    // inputType.value = 'running';
    this.formHide();
    this.workouts.push(this.curWork);
  }

  submitListener() {
    self = this;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // console.log(e);
      self.createWorkout();
      self.setLocalStorage();
      self.renderMarker(self.mapEvent.latlng, self.map);
      self.renderWorkout(self.curWork);
      console.log(self.curWork);
    });
  }

  // callback fn to click on map eventlistener
  mouseClick(e) {
    // console.log(e);

    if (!form.classList.contains('hidden')) return;
    self.mapEvent = e;

    console.log(self.mapEvent);
    console.log(this);
    const { lat, lng } = e.latlng;
    // console.log('lat ' + lat + ', lng ' + lng);

    self.formView();
  }

  // load map on page
  loadMap(position) {
    // console.log(position);

    const { latitude, longitude } = position.coords;
    const coOrdinates = [latitude, longitude];
    console.log(coOrdinates);

    this.map = this.createMap(coOrdinates, this.zoom);
    console.log(this.map);

    this.createTileLayer(this.map);
    self = this;

    //loadstorage workouts
    if (!this.map) return;
    this.getLocalStorage();

    this.map.on('click', this.mouseClick);
  }

  showGeoLocation() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this.loadMap.bind(this),
        function () {
          alert('Access to location not allowed.');
        }
      );
  }
}

const appMap = new App();
console.log(appMap);
