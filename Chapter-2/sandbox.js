//String
console.log("Hello, world.");
let email = "niggasdontlie@gmail.com"
console.log(email);



//String concatination
let name = "Aditya";
let surname = "Bhandari";
console.log(name + " " + surname);

//getting characters
console.log(surname[4]);



//String length
console.log(surname.length);



//String methods

console.log(surname.toUpperCase());
//these methods donot do is alter the original value
let result = surname.toLowerCase();

console.log(result, surname);


//altering the original value is done by this

let index = email.indexOf("g");
console.log(index);


//common string  methods
let pusyy = email.lastIndexOf('n');
console.log(pusyy);
console.log(pusyy);

//what slice does is it slices a section from the string

let deck = email.slice(0, 9);
console.log(deck);



//substr takes to arguments one is the stating index and other is the number of index it wants to slice to
let another = email.substr(4, 8);
console.log(another);


//using the method helps us do is that it replaces the first character in the string
// and replaces it with the other one we argument

let juicypuh = email.replace('n', 'p');
console.log(juicypuh);




