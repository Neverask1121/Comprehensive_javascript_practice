const scores = [10,20,30,40,50, 1, 2, 3];

//Array methods

const filtered = scores.filter((score)=>{
    return score > 20;
})
console.log(filtered);


const users = [
    {name: 'aditya', premium: false},
    {name: 'ana', premium: true},
    {name: 'mia', premium: true},
    {name: 'ginger', premium: false},    
];

const premiumUsers = users.filter((name)=>{
    return name.premium;
});

console.log(premiumUsers);