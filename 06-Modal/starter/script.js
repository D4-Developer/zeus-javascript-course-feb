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
    btnModals[i].addEventListener('click', function() {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

closeModal.addEventListener('click', function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});