const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('Nigga dont copy orlese your wife will come to my room');
});

const mouse = document.querySelector('.box');
mouse.addEventListener('mousemove', e => {
    //console.log(e);
    // to output coordinates inside the box
    // console.log(e.offsetX, e.offsetY);
    // now changing the box content everytime we move
    mouse.textContent = `x - ${e.offsetX} y - ${e.offsetY}`;
});

// scroll eventListener

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
})