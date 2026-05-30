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




