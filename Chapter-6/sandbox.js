console.log("Heloo")
for (let i = 0 ; i < 5 ; i++){
    console.log("Why is it not working")
}


// to store the reference of this to a variable


const nigga = document.querySelector('.error');
const pussy = document.querySelector('div.error');


console.log(nigga);
console.log(pussy);


const puh = document.querySelector('body > h1');

console.log(puh);


//to do something with all the elements of that type

const speed = document.querySelectorAll('p');
console.log(speed);


// to get only a particular one we use the selector like an array

console.log(document.querySelectorAll('p')[4])
const paras = document.querySelectorAll('p');

// using the Foreach

paras.forEach(para => {
    console.log(para);
});

const niggas = document.querySelectorAll(".error");
console.log(niggas);


// grabbibg the element by its id


const element_id = document.getElementById("page-title");
console.log(element_id);


//getting elements by their class name


const element_class = document.getElementsByClassName("error");
console.log(element_class);

const paras1 = document.getElementsByTagName('p');
console.log(paras1[0]);


// actuallly changing something in the html file


const jerling_to_neighbour = document.querySelector('p');
console.log(jerling_to_neighbour.innerText);

//changng in the html page now

jerling_to_neighbour.innerText = "Niggas don't lie at all";

//to append to the text

jerling_to_neighbour.innerText += " Niggas don't lie at all";


// now output all the text containing p

const pussies = document.querySelectorAll('p');

pussies.forEach(element => {
    console.log(element.innerText);
    element.innerText += " Jerking"
});


const content = document.querySelector('div.error');
content.innerHTML = "<h2>This is new error</h2>";

// to append something

//const content = document.querySelector('div.error');
//content.innerHTML = "<h2>This is new error</h2>";

const ppll = ['Aditya', 'Alina', 'Ash'];

ppll.forEach(element => {
    content.innerHTML += `<p>${element}</p>`;
});