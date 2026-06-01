// object literals




const bolgs = [
    {
        title: 'niggas dont lie', likes: 67
    },
    {
        title: 'top 10 cringe', likes: 69
    }
];

let user={
    name: 'Aditya',
    age: 18,
    nigag: 'God',
    location: 'Ohio',
    bolgs: ['Niggas dont lie', 'top 10 cringe moments of all time'],
    login: function(){
        console.log('Puh');
    },
    logBlogs: function(){
        this.bolgs.forEach(bolgs => {
            console.log(bolgs.title, bolgs.likes);
        });;
        console.log('Hello');
    }
};
console.log(user);
console.log(user.name);

console.log(user['bolgs']);
console.log(typeof(user));
console.log(this);

user.logBlogs();



//Math objects

console.log(Math);
console.log(Math.Pi);

console.log(Math.round(7.7));

console.log(Math.floor(7.7));


console.log(Math.ceil(8.7));

console.log(Math.trunc(7.7));


console.log(Math.round(Math.random() * 100))






//Primitive values


let scoreOne = 50;
let scoreTwo = scoreOne;


console.log(`${scoreOne} is equal to the ${scoreTwo}`);




// reference values


const userOne = {name: 'Aditya', age: '18'};
const userTwo = userOne;
console.log(userOne, userTwo);
userOne.name = 'Alia';

console.log(userOne, userTwo);
