'use strict';

const btnsShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
console.log(overlay);


// show modal and overlay on click

function showModalOverlay () {
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
}

// hide/close modal and overlay on click

function hideModalOverlay () {
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
}

// click to show modal via add eventlistener

for(let i = 0; i < btnsShowModal.length; i++)
   btnsShowModal[i].addEventListener('click',showModalOverlay);

// hide/close modal and overlay

btnCloseModal.addEventListener('click', hideModalOverlay);

overlay.addEventListener('click', hideModalOverlay);
