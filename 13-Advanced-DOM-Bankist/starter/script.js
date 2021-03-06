'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach( (btn) => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
  // btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Page-Navigation;

// not performance efficient if we have more element....
// because it is making copy of function passed in FOREACH( (){} );
// document.querySelectorAll('.nav__link').forEach( function (el) {
//   el.addEventListener( 'click', function(e) {
//     e.preventDefault(); // for removing default immediate scrolling
//     console.log('link');
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// });

// Efficient solution....()
// 1. we will add listener to parent of All element
// 2. Determine what element originated the event (check for required classList)

document.querySelector('.nav__links')
  .addEventListener('click', function(e) {
    console.log(e.target);

    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
      console.log('LINK');
      e.preventDefault();

      // will not work because this = .nav__link(<ul>)
      // because, we need <li> class ;; so e.target.getAttribute('href')
      // const id = this.getAttribute('href'); 
      const id = e.target.getAttribute('href'); 
      console.log(id);
      document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
  });



// operations tab ::::
const tabsBtns = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
const tabsContainer = document.querySelector('.operations__tab-container');

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  // Gaurd clause
  if (!clicked) return;

  // removed previous/All btns
  tabsBtns.forEach( t => t.classList.remove('operations__tab--active'));
  // Active the clicked tabBtn 
  clicked.classList.add('operations__tab--active');

  // removed previous container
  console.log(clicked.dataset.tab); // digit
  tabsContent.forEach( c => c.classList.remove('operations__content--active'));
  
  // Active the tab container
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});



// Menu fade animation ::::
const nav = document.querySelector('.nav');

const handleHover = function (e) {
  // console.log(this);

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    // const siblings = document.querySelectorAll('.nav__link');
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    // const logo = document.querySelector('img');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach ( (sb) => {
      if (sb !== link) sb.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

// 1.) nav.addEventListener('mouseover', function(e) {
  //   handleHover(0.5);
  // });

// 2.)
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));



// Sticky navigation 

// 1.)
// const initialCoords = section1.getBoundingClientRect();
// // this should be avoided
// window.addEventListener('scroll', function(e) {
//   // console.log(e);
//   if (window.scrollY > initialCoords.top)
//     nav.classList.add('sticky');
//   else nav.classList.remove('sticky');

// })

// 2.) Interactive Observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   // 10% intersection with viewport when scrolling up/down, the callback function will be executed
//   // so if 10% of content is visible on viewport:) callback fn will be executed
//   // threshold: 0.1, 

//   threshold: [0, 0.2]
//   // 0: getting in & out of target from viewport :) callback fn executed
//   // 1: if target is visible 100%:) callback fn executed 
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const stickyNav = function(entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting)
    nav.classList.add('sticky');
  else  nav.classList.remove('sticky');
}

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  // when .header is completely not inside viewport callback fn will be executed
  threshold: 0,
  rootMargin: `-${navHeight}px`
});

headerObserver.observe(header);



// Reveal the sections on scolling
const allSection = document.querySelectorAll('.section');

function revealSection(entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  
  // performance improvement
  observer.unobserve(entry.target);
}

const sectionOptions = {
  root: null,
  threshold: 0.20,
}

const sectionObserver = new IntersectionObserver(
  revealSection, sectionOptions
);

allSection.forEach( (section) => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section)
});


// Lazy-loading of images;
// cssSelector[X] specifies those element having X attribute 
const imgTargets = document.querySelectorAll('img[data-src]'); // 3 image tag having [data-src] defined
// console.log(imgTargets);

function loadImg(entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src;
  entry.target.src = entry.target.dataset.src;

  // load needed after placing target.src to remove the blur when full img is loaded
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
} 

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));



// Slider of reviews
// translateX property ::::
//    0%,  100%,  200% : 1st slider in viewport
// -100%,    0%,  100% : 2nd slider in viewport
// -200%, -100%,    0% : 3rd slider in viewport
function slider() {

  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dots = document.querySelector('.dots');
  
  // console.log(sliders);
  let counter = 0;
  
  function translateSlides(offset) {
    slides.forEach( (slide, i) => {
      slide.style.transform = `translateX(${100 * (i - offset)}%)`;
    })
  };
    
  function updateCounter(val) {
    counter = counter + val;
    if (counter === slides.length) counter = 0;
    if (counter === -1) counter = slides.length - 1;
    translateSlides(counter);
    activateDot(counter);
  }
  
  btnLeft.addEventListener('click', function (e) {
    updateCounter(-1);
  });
  
  btnRight.addEventListener('click', function (e) {
    updateCounter(+1);
  });
  
  
  // slider btns translate
  // create dots....
  
  function createDots() {
    slides.forEach( (_,i) => {
      const btn = `<button class="dots__dot" data-slide="${i}"></button>`;
      dots.insertAdjacentHTML('beforeend', btn);
    });
  }
  
  // Activate dots
  function activateDot(slide) {
    document.querySelectorAll('.dots__dot')
    .forEach( dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
  }
  
  dots.addEventListener('click', function(e) {
    if (e.target.classList.contains('dots__dot')) {
      const {slide} = e.target.dataset;
      translateSlides(slide);
      activateDot(slide);
      counter = Number(slide);
    }
  });

  function initSlider() {
    createDots();
    activateDot(0);
    translateSlides(0);
  }
  initSlider();
}
slider();

///// ::::::::::::::::::: ///// ::::::::::::::::::::: /////
///// ::::::::::::::::::: ///// ::::::::::::::::::::: /////



/*
console.log(document.documentElement); // returns entire document from HTML tag
console.log(document.head); // returns head element
console.log(document.body); // returns body element

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('selection--1');
// HTMLCollection :: live-collection if DOM changed it will updated immediatly
// NodeList :: will not be updated automatically 
console.log(document.getElementsByTagName('button')); // HTMLCollection

document.getElementsByClassName('btn') // HTMLCollection


// Creating & Inserting Elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use cookies for improved functionality & analytics
<button class='btn btn--close--cookie'>Got it!</button> `;

// prepand() add element at first element
// header.prepend(message);
// header.append(message); // message will be added at only 1 postion in HTMLCollection

// header.append(message.cloneNode(true)); // 1,......,n

// only have element at 1 position only
// header.before(message);
header.after(message); // move message from before to after header.

// Delete
document.querySelector('.btn--close--cookie')
.addEventListener('click', function() {
  '1.' // document.querySelector('').remove();
  '2.' 
  message.remove(); // will remove the cookie details info
  '3.'
  // message.parentElement.removeChild(message); // same as above
});




// Styles :: these are applied as Inline style
message.style.backgroundColor = '#374757';
message.style.width = '120%';

// return inline-style properties only if exist, otherwise empty string
console.log(message.style.height); 
console.log(message.style.backgroundColor);

// solution
console.log(getComputedStyle(message)); // returns all currently applied CSS-properites
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(
  getComputedStyle(message).height)
  + 50 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');


// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Non-standard attributes access;
console.log(logo.designer);
// Solution of accessing Non-standard Attributes;
console.log(logo.getAttribute('designer'));

logo.setAttribute('designer', 'darshan');
console.log(logo.getAttribute('designer'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));
console.log(document.querySelector('.nav__link--btn').getAttribute('href'));

// special attributes 
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('');
logo.classList.remove('');
logo.classList.toggle('');
logo.classList.contains('');

// this will cleared all entries in the classList & set the new className.
logo.className = 'newClass';
*/


/*
//
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // console.log(s1coords.y);

  // 1.) but not accurate 
  // scroll(0, s1coords.y); // not accurate of scrolling to .y;

  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // console.log('width/height of client viewport: ', 
  //   document.documentElement.clientWidth,
  //   document.documentElement.clientHeight
  // );

  // 2.) scrollTo(x,y)
  // window.scrollTo(s1coords.left, s1coords.top); // not accurate
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset); // instant scrolling

  // // passing the object.... for smooth behavior
  // window.scrollTo( {
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // } ); 'smooth scrolling'

  // 3.) a morden way to scroll to a specific element;
  section1.scrollIntoView( {behavior: 'smooth'} );
});
*/



/*
// Types of Event & Ecent Handlers

const h1 = document.querySelector('h1');

// 1.)
// h1.addEventListener('mouseenter', alertH1);

// // 2.)
// h1.onmouseenter = function(e) {
//   alert('addEventListener: Great! you are reading the heading :D');
// };


// removes eventListener()

const alertH1 = function(e) {
  alert('addEventListener: Great! you are reading the heading :D');
  h1.removeEventListener('mouseenter', alertH1);
  // only 1 time mouseenter will execute;
  // after that we are removing that eventListener, so it will never executed
};

h1.addEventListener('mouseenter', alertH1);

// after 5 seconds there will be no alert.
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);
*/



/*
// Event propagation (Bubbling & Capturing)
// addEvenetListener() by default will only listening for Bubbling
// rgb(255,255,255)
const randomInt = (min, max) => 
  Math.floor(min + Math.random() * (max - min + 1));

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor);

document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(this === e.currentTarget); // TRUE //

  // STOP Propagation
  // event will not propagate back to root element
  // e.stopPropagation(); // so parent element didn't change the color, 
});

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
}, false); // byDefault false;


// capturing phase ex. for 3rd paramatere 
document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
  e.stopPropagation();
}, true);
// this will be first log(); :) NAV
// 2nd will be original targeted :) link
// 3rd will be :) Container
// e.stopPropagation(); if use this in capturing element:) 
// no one after this capturing element will be listeninig for event....

*/



/*
// DOM Traversing

const h1Ele = document.querySelector('h1');

// Going downwards: child
console.log(h1Ele.querySelectorAll('.highlight')); // do as deep as necessary
console.log(h1Ele.childNodes); // immediate childs :: NodeList
console.log(h1Ele.children); // :: HTMLCollection
h1Ele.firstElementChild.style.color = 'cyan';
h1Ele.lastElementChild.style.color = 'darkcyan';

// Going upwards: parent
console.log(h1Ele.parentNode); // direct parent
console.log(h1Ele.parentElement); // direct parent

  // closest parent:: will go until it finds the required parent in condition
  h1Ele.closest('.header').style.background = 'var(--gradient-secondary)';
  h1Ele.closest('h1').style.background = 'var(--gradient-primary)'; // h1 element itself
  // so closest is opposite of querySelector(),
  // as querySelector() will find child element,
  // while closest() will find Parent element

// Going sideways: direct siblings access
console.log(h1Ele.previousElementSibling); // null as h1 is first element of parent <div>
console.log(h1Ele.nextElementSibling); // next element from <h1>

console.log(h1Ele.previousSibling);
console.log(h1Ele.nextSibling);
  
  // get all sibling:: get children of parent
  console.log(h1Ele.parentElement.children);
  // [...h1Ele.parentElement.children].forEach( function (el) {
    // if (el !== h1Ele) el.style.transform = 'scale(0.5)';
  // });
*/


//  Other DOM Events
// will not wait for media files
document.addEventListener('DOMContentLoaded', function(e) {
  console.log('HTML,css parsed and DOME tree built', e);
});

window.addEventListener('load', function(e) {
  console.log('Page fully loaded', e);
})

window.addEventListener('beforeunload', function(e) {
  // e.preventDefault(); // requires in some browser
  console.log(e);
  e.returnValue = '';
});




