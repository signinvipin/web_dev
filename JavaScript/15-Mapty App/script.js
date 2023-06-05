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

function formView() {
  form.classList.toggle('hidden');
}

function toggleCadElev() {
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
}

let type;
formView();

navigator.geolocation.getCurrentPosition(
  pos => console.log(pos.coords),
  alert('no position data available!')
);

inputType.addEventListener('change', function () {
  console.log(inputType.classList.value);
  toggleCadElev();
});
