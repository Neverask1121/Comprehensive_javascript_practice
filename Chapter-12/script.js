// console.log(1);

// setTimeout(() => {
//   console.log("Hello Callback function is fired....");
// }, 2000);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);


// Placing all the below stuff in a function

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    // logging the request state change in the console

    request.addEventListener('readystatechange', () => {
      // console.log(request, request.readyState);
      // we can do something only at this stage
      if(request.readyState === 4 && request.status == 200){
        const data = JSON.parse(request.responseText);
        resolve(data);
      }
      else if(request.readyState === 4){
        reject('error getting the resource');
      }
    });


    // to open the request here


    request.open('GET', resource);



    // now actually sending the request

    request.send();     
  })
};


getTodos('todos/Aditya.json').then(data => {
  console.log('promise resolved: ', data);
}).catch( err => {
  console.log('promise rejected: ', err)
})




//   const todos = (resource, callback) => {
//     // Making a http request

//     // const request = new XMLHttpRequest();

//     // // logging the request state change in the console

//     // request.addEventListener('readystatechange', () => {
//     //   // console.log(request, request.readyState);
//     //   // we can do something only at this stage
//     //   if(request.readyState === 4 && request.status == 200){
//     //     callback(undefined, request.responseText);
//     //   }
//     //   else if(request.readyState === 4){
//     //     callback("The callback function could not get fired..., mistake in the url", undefined);
//     //   }
//     // });


//     // // to open the request here


//     // request.open('GET', resource);



//     // // now actually sending the request

//     // request.send();
//   };

// // console.log(1);
// // console.log(2);

// // The below is called as CallBack hell 

// // todos("todos/Aditya.json", (err, data) => {
// //   console.log(data);
// //   todos("todos/Ayesha.json", (err, data) => {
// //     console.log(data);
// //     todos("todos/Aman.json", (err, data) => {
// //       console.log(data);
// //     });
// //   });
// //   // // console.log(err, data);

// //   // if(err){
// //   //   console.log(err);
// //   // }
// //   // else{
// //   //   console.log(data);
// //   // }

// // });


// // console.log(3);
// // console.log(4);

// // Promises example

// console.log(1);

// const getSomething = () =>{

//   return new Promise((reject, resolve) => {
//     // we are going to fetch some data
//     resolve("We are resolving data here, data");
//     reject("We are rejecting data here, error");
//   });
// };

// // This is how we resolve promises

// // getSomething().then((data) => {
// //   console.log(data);
// // }, (err) => {
// //   console.log(err);
// // });

// // Or we cn resolve it like this

// getSomething().then( data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// });

// console.log(2);