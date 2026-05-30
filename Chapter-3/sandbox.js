//practice for loops

for(let i = 0 ; i < 5 ; i++){
    console.log('Modih', i);
}
console.log('Meloni');

//Through the string

const names = ['Modi', 'Meloni', 'Mamta'];

for(let i = 0 ; i < names.length ; i++){
    console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}


let i = 0;

while(i < 5){
    console.log(i);
    i++;
}

const names1 = ['aditya', 'bhandari', 'annie'];

if(names1.length>3){
    console.log("Correct");
}
else{
    console.log("Wrong")
}


//Starting logical operators

const password = 'password@1234';

if(password.length >= 12 && password.includes('@')){
    console.log('You might be true');
}


console.log(!true);
console.log(!true);


const scores = [10,20,30,40,50,60,70,80,90];

for(let i = 0 ; i < scores.length ; i++){
    if(scores[i] === 40){
        continue;
    }
    else if(scores[i] === 80){
        break;
    }
    console.log(scores[i]);
}




const grade = 80

switch(grade){
    case '50':
        console.log('one');
        break;
    case 80:
        console.log('two');
        break;
    case '80':
        console.log('found')
        break;
    default:
        console.log('Invalid nigga try again')
        break;
}



//Let and const are used to define any variable as a global scope or a local scope
// whereas var is always defined as global


const name = 'Aditya';
let age = 30;

if(true){
    age = 'Ayesha'
    console.log(name, age);
    if(true){
        age = 8
        console.log(name, age)
        var heva = 90
    }
}
console.log(name, age, heva)