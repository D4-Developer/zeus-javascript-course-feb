'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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


///// ::::::::::::::::::: ///// ::::::::::::::::::::: /////
///// ::::::::::::::::::: ///// ::::::::::::::::::::: /////


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