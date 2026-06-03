const ul = document.querySelector("ul");
// ul.remove();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  // ul.innerHTML += '<li>something<li/>';

  const li = document.createElement("li");
  li.textContent = "something new";
  // ul.append(li);
  // Also we have the method for prepending which goes as follows
  ul.prepend(li);
});

// const items = document.querySelectorAll('li');

// items.forEach((item) => {
//     item.addEventListener('click', e => {
//         // console.log('item clicked');
//         // to stopo the event bubbling we need to use the stop propogation as such
//         e.stopPropagation();
//         console.log("event in LI");
//         e.target.remove();
//     });
// });

ul.addEventListener('click', e => {
    // console.log('event in UL');
    // console.log(e.target);
    // console.log(e);

    if(e.target.tagName === "LI"){
        e.target.remove();
    }
})
