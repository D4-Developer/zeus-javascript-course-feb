'use strict';

// document.querySelector() only returns the first matched element only...
// document.querySelectorAll()
const btnModals = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');

console.log(btnModals);
console.log(typeof btnModals );

for (let i = 0; i < btnModals.length; ++i)
    btnModals[i].addEventListener('click', showOverlay_Modal);

closeModal.addEventListener('click', hideOverlay_Modal);

overlay.addEventListener('click', hideOverlay_Modal);

function showOverlay_Modal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function hideOverlay_Modal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// keyPress events....
// addEventListner should be on document object to acheive globally....

// addEventListener has event info related to it....
document.addEventListener('keydown', function(event) {
    // console.log('a key is pressed....');
    // console.log(event);
    console.log(event.key); // returns the which key is pressed....
    if (event.key == 'Escape' && !modal.classList.contains('hidden'))
        hideOverlay_Modal();
});