'use strict';

const btn = document.querySelector('button');

// btn.onclick = function() { 
//     alert('Click');
// };

// btn.addEventListener('click', () => {
//     alert('click');
// });

// btn.addEventListener('click', () => {
//     alert('secondClick');
// });

btn.addEventListener('mouseenter', () => {
    console.log('Counter');
});

