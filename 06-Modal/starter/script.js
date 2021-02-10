'use strict';

// document.querySelectorAll
const modals = document.querySelectorAll('.show-modal');
console.log(modals);
console.log(typeof modals );

for (let i = 0; i < modals.length; ++i)
    console.log(modals[i].textContent);