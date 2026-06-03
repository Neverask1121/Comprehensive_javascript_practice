const article = document.querySelector('article');
console.log(article.children);

// Now we are using the concept of oops 

console.log(Array.from(article.children));
console.log(article.children);
Array.from(article.children).forEach(child =>{
    child.classList.add('article-element');
});



//Now doing something with the parent element


const title = document.querySelector('h2');
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);


//we take this one step farther
//chaining

console.log(title.nextElementSibling.parentElement.children);


