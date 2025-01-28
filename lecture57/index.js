// <!-- //async-await :---
// this property is used to provide synchronous behaviour to asynchronous code -->

//this is an asynchronous code
// async function getData(){
//     setTimeout(function(){
//         console.log("i am inside timeout block", 3000);
//     })
// }

// let output = getData();


// await ???????

// fetch API :---
// it provides an interface for fetching resources 


//scenario:
//prepare url / api endpoint --> async
//  await --> fetch data --> network call --> async
//process data --> sync

//  async function getData(){


//     //get request -> async
//     let response = await fetch ('url');

//     // parse url -> async
//     let data = await response.json();
//     console.log(data);
//  }

//  getData();



