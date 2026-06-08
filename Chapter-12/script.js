// console.log(1);

// setTimeout(() => {
//   console.log("Hello Callback function is fired....");
// }, 2000);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);


// Placing all the below stuff in a function


const todos = (resource, callback) => {
  // Making a http request

  const request = new XMLHttpRequest();

  // logging the request state change in the console

  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    // we can do something only at this stage
    if(request.readyState === 4 && request.status == 200){
      callback(undefined, request.responseText);
    }
    else if(request.readyState === 4){
      callback("The callback function could not get fired..., mistake in the url", undefined);
    }
  });


  // to open the request here


  request.open('GET', resource);



  // now actually sending the request

  request.send();
};

// console.log(1);
// console.log(2);

// The below is called as CallBack hell 

todos("todos/Aditya.json", (err, data) => {
  console.log(data);
  todos("todos/Ayesha.json", (err, data) => {
    console.log(data);
    todos("todos/Aman.json", (err, data) => {
      console.log(data);
    });
  });
  // // console.log(err, data);

  // if(err){
  //   console.log(err);
  // }
  // else{
  //   console.log(data);
  // }

});


// console.log(3);
// console.log(4);
