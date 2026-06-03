const title = document.querySelector('h1');
title.setAttribute('h1', 'classk')

// rather than using set attribute we can so this

console.log(title.style);
console.log(title.style.color);
title.style.margin= '50px';
title.style.color='crimson';
title.style.fontsize = '60px';
title.style.margin=' ' // removes the property

// add and remove classes

const link = document.querySelector('p');


console.log(link.classList); // getting the list of classes in the p class
link.classList.add('error'); // adding another class to them 
link.classList.remove('error'); // removing the class from the list of classes
link.classList.add('success'); // adding the success class to the list of classes


// challenge question


const link2 = document.querySelectorAll('p');
link2.forEach(element => {
    if(element.textContent.includes('error')){
        element.classList.add('error');
    }
    else if(element.textContent.includes('success')){
        element.classList.add('success');
    }
});


// now we learn about how to toggle classes

const hello = document.querySelector(".title");
hello.classList.toggle('test');
hello.classList.toggle('test');