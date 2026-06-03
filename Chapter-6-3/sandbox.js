const button = document.querySelector('button');


button.addEventListener('click', () => {
    console.log('you fked me');
});


const items = document.querySelectorAll('li');

items.forEach((item) => {
    item.addEventListener('click', () => {
        console.log('item clicked');
    });
});

// event object created by the browser

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        // console.log(e.target);
        // console.log(item);
        
    });
});