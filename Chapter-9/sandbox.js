// const scores = [10,20,30,40,50, 1, 2, 3];

// //Array methods

// const filtered = scores.filter((score)=>{
//     return score > 20;
// })
// console.log(filtered);


// const users = [
//     {name: 'aditya', premium: false},
//     {name: 'ana', premium: true},
//     {name: 'mia', premium: true},
//     {name: 'ginger', premium: false},    
// ];

// const premiumUsers = users.filter((name)=>{
//     return name.premium;
// });

// console.log(premiumUsers);


// // map methods
// const scores = [10,20,30,40,50,60,70];
// const map_method = scores.map((res) => {
//     return res / 2;
// });
// console.log(map_method);

// harder

// const products = [
//     {name: 'Ayesha', rate: '60'},
//     {name: 'Alina', rate: '67'},
//     {name: 'Zelina', rate: '800'},
//     {name: 'Subhi', rate: '900'}
// ];

// const products_half = products.map((result) =>{
//     if(result.rate > 100){
//         return {name: result.name, rate: result.rate / 2};
//     }
//     else{
//         return result;
//     }
// });

// console.log(products_half);
// // original array stays intact
// console.log(products);


// Reduce method

// const scores = [10,20,30,40,50,60,70];

// const scores_reduce = scores.reduce((acc, curr)=>{
//     if(curr>30){
//         acc++;
//     }
//     return acc;
// }, 0);
// console.log(scores_reduce);

// const scores = [
//     {name: 'Aditya', score: 100},
//     {name: 'Siddhi', score: 80},
//     {name: 'Niddhi', score: 70},
//     {name: 'Aditya', score: 67}
// ];

// const result = scores.reduce((acc, curr)=>{
//     if(curr.name === 'Aditya'){
//         acc+= curr.score;
//     }
//     return acc;
// }, 0);
// console.log(result);

// // find method
// const scores_one = [10,20,30,50,60,70,80];
// const find_method = scores_one.find(result => result>50);
// console.log(find_method);

// Array methods soring

// const names = ['aditya', 'zeliha', 'mario', 'siddhi'];
// names.sort();
// names.reverse();

// names.sort((a,b) => b-a);
// console.log(names);
// const scores = [
//     {name: 'Aditya', score: 100},
//     {name: 'Siddhi', score: 80},
//     {name: 'Niddhi', score: 70},
//     {name: 'Aditya', score: 67}
// ];


// const sorted_scores = scores.sort((a,b)=>{
//     if(a.score > b.score){
//         return 1;
//     }
//     else {
//         return -1;
//     }
// });

// console.log(sorted_scores);


// const numbers = [40,20,10,60,44];
// console.log(numbers.sort((a,b) => a-b));


// understanding and learning chaining 
const chain = [
    {name: 'Aditya', age: 18},
    {name: 'Zeliha', age: 26},
    {name: 'Pooja', age: 35},
    {name: 'Ayesha', age: 9}
];

const filtered = chain.filter(variation => variation.age > 9);

const age_halved = filtered.map((cheese)=>{
    return `The person ${cheese.name} has a age of ${cheese.age/2}`;
});

console.log(age_halved);

// easier way
const half_aged = chain.filter(variation => variation.age > 9).map((cheese)=>{
    return `The person ${cheese.name} has a age of ${cheese.age/2}`;
});
console.log(half_aged);