// const form = document.querySelector('.signup-form');
// // const username = document.querySelector('#username');
// // form.addEventListener('submit', e=>{
// //     // to prevent the default action
// //     e.preventDefault();
// //     // to get the value in the field username
// //     console.log(username.value);
// //     // another way to do this is that
// //     console.log(form.username.value);
// // });

// //Testing the RegEx

// const username = '123aditya123';
// // const pattern = /^[a-z]{6,}$/;
// const pattern = /[a-z]{6,}/;

// // let result = pattern.test(username);
// // console.log(result);
// // if(result){
// //     console.log('Pussy');
// // }

// // finding the match
// console.log(username.search(pattern));


//next Chapter starts here

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;


    if(usernamePattern.test(username)){
        // feedback good information
        feedback.textContent = 'That username is valid pussy';
    }
    else{
        // feedback bad information
        feedback.textContent = 'username must contain 6-12 char and must be either small or capital';
    }
});

// To get a live feedback we need the following

form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
        // console.log('passes');
        form.username.setAttribute('class', 'success');
    }
    else{
        // console.log('failed');
        form.username.setAttribute('class', 'failed');
    }
});