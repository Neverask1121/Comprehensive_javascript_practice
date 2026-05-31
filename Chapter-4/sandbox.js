//function declaration

console.log('check');


//function expression
function nigga(){
    console.log('pussy');

}

nigga();
nigga();
nigga();


//function expression

const speak = function(){
console.log('this works niga');
};

speak();
speak();




//Javascript is famous for hoisting and if we declare a function below the 
//function call it still appears


//But javascript does not host function expressions


//passing a value in the function is done like this



const clit = function(red = 'wjite', time = 'afternoon'){
    console.log(`Her puh is ${red} ${time}`);
};


clit('black', 'night');



const jerk = function(radius){
    let area = 3.14 * radius ** 2;
    return area;
};


console.log(jerk(10));




// arrow function


const jerk2 = (radius) => {
    let area = 3.14 * radius;
    return area;
};




//more simplification


// for more than one parameter parnthesis is needed or else we can take away parenthesis



const jerk3 = (radius) => 3.14 * radius ** 2;

console.log(jerk3(10));




// exercise



const greet = () => 'hello, world';

console.log(greet());




//methods


let name = 'Aditya'

console.log(name.toUpperCase());




//callback functions



const funk = (call_back) => {
    let value = 50;
    call_back(value);
};


funk( value =>{
    console.log(value);
});



// array methods


const function1 = (callbackfunction1) =>{
    let value = 50;
    callbackfunction1(value);
};


function1(value =>{
  console.log(value);  
});



// array methods forEACH


let ppl = ['ayesha', 'aditya', 'aman', 'madison', 'alina'];

ppl.forEach((person, index) => {
    console.log(index, person);
    console.log(`Hello ${person}`);    
});



// using query selector

const ul = document.querySelector('.pple')

const pple = ['ayesha', 'aditya', 'aman', 'madison', 'alina'];

let html = ``;


pple.forEach((person, index) => {
    html += `<li style = "color: purple">${ person}</li>`;

});

console.log(html);
ul.innerHTML = html;





