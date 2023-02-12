'use strict';

// const btn = document.querySelectorAll('button'),
//     overlay = document.querySelector('.overlay');

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

// let i = 0;

// const deleteElement = (e) => {
//     console.log(e.target);
//     console.log(e.type);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// btn.forEach(item => {
//     item.addEventListener('click', deleteElement);
// });

// const link = document.querySelector('a');

// link.addEventListener('click', function (event) {
//     event.preventDefault();
// });


// const btn = document.querySelector('button'),
    const  btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert("Click");
// };

// btn.addEventListener('click', ()=> {
//     alert("Click!");
// });

// btn.addEventListener('click', ()=> {
//     alert("Click!?");
// });

let i = 0;
const deleteElement = (e) => {
    // console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.type);
    // e.target.remove();
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
}; 

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once:true});
});

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
// btn.removeEventListener('click', deleteElement);

// btn.addEventListener('mouseenter', (e)=> {
//     console.log(e);
//     console.log(e.target);
//     e.target.remove();
//     // console.log("Click!?");
// });

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.target);
});

