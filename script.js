'use strict';

const btn = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function() { 
//     alert('Click');
// };

// btn.addEventListener('click', () => {
//     alert('click');
// });

// btn.addEventListener('click', () => {
//     alert('secondClick');
// });

// btn.addEventListener('mouseenter', function(e){
//     console.log(e);
// });

let i = 0;

const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

btn.forEach(item => {
    item.addEventListener('click', deleteElement);
});

const link = document.querySelector('a');

link.addEventListener('click', function (event) {
    event.preventDefault();
});