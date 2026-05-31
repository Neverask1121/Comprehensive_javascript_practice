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