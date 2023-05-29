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
// scrollTo section
const learnMore = document.querySelector('.btn--scroll-to');
// operations tab and content
const tabCont = document.querySelectorAll('.operations__tab');
const opsCont = document.querySelectorAll('.operations__content');
// sticky nav bar
const bodyHeader = document.querySelector('.header');
// slider 
const btnSliderLeft = document.querySelector('.slider__btn--left');
const btnSliderRight = document.querySelector('.slider__btn--right');
const dotCont = document.querySelector('.dots');
const slides = document.querySelectorAll('.slide');


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
  	
  	if(e.target.classList.contains('btn--show-modal')) return; // Keep href -'#' in check
  	if(!e.target.classList.contains('nav__link')) return;
  	
    const getLink = e.target.getAttribute('href');  // Possible e.target or 'this'
    // console.log(e.target, getLink, typeof getLink);
    const lnkElement = document.querySelector(getLink);
    
    // const getRects = lnkElement.getBoundingClientRect();
    // console.log(getRects.left, getRects.top);

    // Way #1
  	// window.scrollTo(getRects.left + window.pageXOffset, getRects.top + window.pageYOffset);

  	// Way #2
  	// window.scrollTo({
  	  // left: getRects.left + window.pageXOffset,
  	  // top: getRects.top + window.pageYOffset,
  	  // behaviour: 'smooth'});

  	// Way #3
  	lnkElement.scrollIntoView({behaviour:'smooth'});
  });
});

// Scroll-To-Section Links
  
// Old way
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
// OR,
// New way
const goToSection = () => document.querySelector('#section--1')
.scrollIntoView({behaviour:'smooth'});
	
learnMore.addEventListener('click', goToSection);


// Sticky Nav bar when page scroll

// Normal Coding - window-pageYOffset/scrollY triggers at every scroll - not prefered
/*
const stickyNav = function () {
// Option 1
// when value, 'pageYOffset = 0' increases, make 'sticky' else not
  // if (window.pageYOffset > 0){
  
// Option 2
  // if (window.pageYOffset > navBar.offsetHeight) {

// Option 3
  if  (window.scrollY > navBar.offsetHeight) {
    navBar.classList.add('sticky');
  } else {
  	navBar.classList.remove('sticky');
  }
}

document.addEventListener('scroll', stickyNav);
*/
// Using IntersectionObserver API
const obsCallBack = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) navBar.classList.add('sticky');
  if (entry.isIntersecting) navBar.classList.remove('sticky');	
}

const obsOptions = {
	root: null,
	// rootMargin:'0px 0px 0px 0px', // set at least 1
// callback() delay trigger, moves intersection line downwards
	threshold:[0.95], // sets intersectionRatio, reduces intersecting area
// callback() early trigger, moves intersection line upwards 
}
const stickyNavObserver = new IntersectionObserver(obsCallBack, obsOptions);
// After sticky, nav remains sticky at all scroll points, so use of header
stickyNavObserver.observe(bodyHeader); 


// Show operations tab with content
const selectShow = function (e) {
  // e.preventDefault();
  // console.log(e.target);
  let tabSelect;
  if (e.target.classList.contains('operations__tab')) {
    tabSelect = e.target;
  }
  if (e.target.firstChildElement === HTMLButtonElement.span) {
    tabSelect = e.target.closest('.operations__tab');
  }

  if (tabSelect){
    tabCont.forEach((t)=> t.classList.remove('operations__tab--active'));
    opsCont.forEach((o)=> o.classList.remove('operations__content--active'));

    const tabNo = tabSelect.dataset.tab;
    const contSelect = document.querySelector(`.operations__content--${tabNo}`);

    tabSelect.classList.add('operations__tab--active');
    contSelect.classList.add('operations__content--active');
  }
}

tabCont.forEach((tab) => tab.addEventListener('click', selectShow));


// Delayed Section Loading

const sectionAll = document.querySelectorAll('.section');

// using IntersectionObserver API
const sectionCallback = function (entries, observer) {
	const [entry] = entries;
	// console.log(entry);	
	
	if (!entry.isIntersecting) return;
	if (entry.isIntersecting) entry.target.classList.remove('section--hidden');

	observer.unobserve(entry.target);
}
const sectionObj = {
	root:null,
	rootMargin:'-200px',
	threshold:[0],
}
const sectionObserver = new IntersectionObserver(sectionCallback, sectionObj);
sectionAll.forEach((sec) => {
  sectionObserver.observe(sec);
  sec.classList.add('section--hidden');
});


// Image lazy loading
const imgAll = document.querySelectorAll('.features__img');

// using IntersectionObserver API
const imgCallback = function (entries, observer) {
	const [entry] = entries;
	// console.log(entry);
	
	if (!entry.isIntersecting) return;

	entry.target.src = entry.target.dataset.src;
	entry.target.addEventListener('load',
	  ()=>entry.target.classList.remove('lazy-img'));

	observer.unobserve(entry.target);
}
const imgObj = {
	root:null,
	// rootMargin:,
	threshold:[0],
}
const imgObserver = new IntersectionObserver(imgCallback, imgObj);
imgAll.forEach((img) => {
  imgObserver.observe(img);
});

// Display Slides with Content
// using style.'transform: translateX = %age'

let slideNumber = 0; 

const addDots = (index) => {
  const html = `<button class="dots__dot dot--${index}" data-slide="${index}"></button>`;
  dotCont.insertAdjacentHTML('beforeend', html);
}
slides.forEach((_, i) => addDots(i));

const dotEvLis = (e) => {
  e.preventDefault();
  slideNumber = e.target.dataset.slide;
  // console.log(slideNumber);
  changeSlide();
}

const actDots = function () {
  const dotsAll = document.querySelectorAll('.dots__dot');
  dotsAll.forEach((dot) => {
    dot.classList.remove('dots__dot--active');
    dot.addEventListener('click',dotEvLis);
  });
  
  document.querySelector(`.dot--${slideNumber}`).classList.add('dots__dot--active');
}

const changeSlide = function () {
  slides.forEach((slide, index) =>{
    slide.style.transform = `translateX(${100*(index - slideNumber)}%)`;
    actDots();
  });
}
changeSlide();  // initialize at first visit

const sliderLeft = function () {
  if (slideNumber === 0) return;
  slideNumber--;
  changeSlide();
}
const sliderRight = function () {
  if (slideNumber === slides.length - 1) return;
  slideNumber++;
  changeSlide();
}

btnSliderLeft.addEventListener('click', sliderLeft);
btnSliderRight.addEventListener('click', sliderRight);
