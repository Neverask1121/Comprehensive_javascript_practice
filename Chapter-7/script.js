const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
// form.addEventListener('submit', e=>{
//     // to prevent the default action
//     e.preventDefault();
//     // to get the value in the field username
//     console.log(username.value);
//     // another way to do this is that
//     console.log(form.username.value);
// });

//Testing the RegEx

const username = '123aditya123';
// const pattern = /^[a-z]{6,}$/;
const pattern = /[a-z]{6,}/;

// let result = pattern.test(username);
// console.log(result);
// if(result){
//     console.log('Pussy');
// }

// finding the match
console.log(username.search(pattern));