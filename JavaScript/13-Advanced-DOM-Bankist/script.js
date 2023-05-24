'use strict';

// DOM components
// modal and overlay
const btnOpenModal = document.querySelectorAll('.btn--show-modal');
const btnCloseModal = document.querySelector('.btn--close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// nav bar
const navBarLinks = document.querySelectorAll('.nav__link');
const navBar = document.querySelector('.nav');
const barLogo = document.querySelector('.nav__logo');

const modalViewToggle = () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

btnOpenModal.forEach(btn => btn.addEventListener('click', modalViewToggle));

btnCloseModal.addEventListener('click', modalViewToggle);

overlay.addEventListener('click', modalViewToggle);

// Navigation bar links and logo opaque/focus feature
// Way #1 - normal
// opacity to links and logo eventlisteners
const rOpacity = function () {
  this.style.opacity = 1;
};
const aOpacity = function () {
  this.style.opacity = 0.5;
};

// opacity to links and logo
const rmOpacity = a => (a.style.opacity = 1);
const adOpacity = a => (a.style.opacity = 0.5);

// Eventlisteners addition and removal
const adEvLis = function (a) {
  a.addEventListener('mouseenter', rOpacity);
  a.addEventListener('mouseleave', aOpacity);
};
const rmEvLis = function (a) {
  a.removeEventListener('mouseenter', rOpacity);
  a.removeEventListener('mouseleave', aOpacity);
};

// Callback Function to add or remove opacity and eventlistener
const mouseEnterFunc = function () {
  navBarLinks.forEach(function (lnk) {
    adOpacity(lnk);
    adEvLis(lnk);
  });

  adOpacity(barLogo);
  adEvLis(barLogo);
};
const mouseLeaveFunc = function () {
  navBarLinks.forEach(function (lnk) {
    rmOpacity(lnk);
    rmEvLis(lnk);
  });

  rmOpacity(barLogo);
  rmEvLis(barLogo);
};

// Navigation bar eventlisteners
navBar.addEventListener('mouseenter', mouseEnterFunc);
navBar.addEventListener('mouseleave', mouseLeaveFunc);

// Way-#2 - e.target === lnk
