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
const learnMore = document.querySelector('.btn--scroll-to');


// Modal AND Overlay
const modalViewToggle = () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

btnOpenModal.forEach(btn => btn.addEventListener('click', modalViewToggle));

btnCloseModal.addEventListener('click', modalViewToggle);

overlay.addEventListener('click', modalViewToggle);

// Navigation Bar links and logo opaque/focus feature
/*
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
*/

// Way-#2 - e.target === lnk

const mouseOver = function (e) {
  if (e.target.classList.contains('nav__link') ||
  e.target.classList.contains('nav__logo')) {
    const link = e.target;
	// console.log(link);

	const navLinksAll = e.target.closest('.nav')
	.querySelectorAll('.nav__link');

	const navLogo = e.target.closest('.nav')
	.querySelector('.nav__logo');

	// console.log(navLinksAll, navLogo);

	navLinksAll.forEach((el) =>{
	  el.style.opacity = 0.5;
	  if (el === link){
	  	el.style.opacity = 1;
	  }
	});

	navLogo.style.opacity = 0.5;
	if (navLogo === link){
		navLogo.style.opacity = 1;
	}
  }
}

const mouseOut = function (e) {
  if (e.target.classList.contains('nav__link') ||
  e.target.classList.contains('nav__logo')) {
    const link = e.target;
	// console.log(link);

	const navLinksAll = e.target.closest('.nav')
	.querySelectorAll('.nav__link');

	const navLogo = e.target.closest('.nav')
	.querySelector('.nav__logo');

	// console.log(navLinksAll, navLogo);

	navLinksAll.forEach((el) => el.style.opacity = 1);
	navLogo.style.opacity = 1;
  }
}

navBar.addEventListener('mouseover', mouseOver);
navBar.addEventListener('mouseout', mouseOut);

// Navigation bar link smooth scroll
navBarLinks.forEach((lnk) => {
  lnk.addEventListener('click', function (e) {
  	e.preventDefault();
    const getLink = e.target.getAttribute('href');  // Possible e.target or 'this'
    // console.log(getLink, typeof getLink);
    const lnkElement = document.querySelector(getLink);
    const getRects = lnkElement.getBoundingClientRect();
    // console.log(getRects.left, getRects.top);

    // Way #1
  	// window.scrollTo(getRects.left + window.pageXOffset, getRects.top + window.pageYOffset);

  	// Way #2
  	// window.scrollTo({left: getRects.left + window.pageXOffset, 
  	// top: getRects.top + window.pageYOffset, behaviour: 'smooth'});

  	// Way #3
  	lnkElement.scrollIntoView({behaviour:'smooth'});
  });
});

// Scroll-To-Section Links

const goToSection = () => document.querySelector('#section--1')
  .scrollIntoView({behaviour:'smooth'});
  
// or, old way
/*
const goToSection = () => {
  const sec1 = document.querySelector('#section--1');
  const gRect = sec1.getBoundingClientRect();
  window.scrollTo({
  	left: gRect.left + window.pageXOffset,
  	top: gRect.top + window.pageYOffset,
  	behaviour:'smooth',
  });
} */
	
learnMore.addEventListener('click', goToSection);

// 
