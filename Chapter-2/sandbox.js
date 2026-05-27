//String
console.log("Hello, world.");
let email = "niggasdontlie@gmail.com"
console.log(email);



//String concatination
let name = "Aditya";
let surname = "Bhandari";
console.log(name +" "+ surname);

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