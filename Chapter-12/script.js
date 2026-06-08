// console.log(1);

// setTimeout(() => {
//   console.log("Hello Callback function is fired....");
// }, 2000);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);



// Making a http request

const request = new XMLHttpRequest();

// logging the request state change in the console

request.addEventListener('readystatechange', () => {
  // console.log(request, request.readyState);
  // we can do something only at this stage
  if(request.readyState === 4 && request.status == 200){
    console.log(request, request.responseText);
  }
});


// to open the request here


request.open('GET', 'https://jsonplaceholder.typicode.com/todos');



// now actually sending the request

request.send();