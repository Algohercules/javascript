// promise :---
// the promise object represents the eventual completion or fsilure of an asynchronous code and its resulting value

//  resolve/fulfill State
//  reject state

// let firstPromise = new Promise ((resolve , reject) => {
//     console.log("babbar")
//     resolve(1001)

// })


//  let firstPromise = new Promise ((resolve , reject) => {
// function sayMyName(){
//       console.log("my name is adarsh")
// }

// setTimeout(sayMyName, 10000)
// })


let promise1 = new promise((resolve, reject) => {
    let success = true;
    if (success){
        resolve ("promise fulfilled");
    }
    else {
        reject ("promise rejected")
    }
})

promise1.then ((message) =>{
    console.log("then ka msg" +     message);
}).catch((error)=>{
    console.log("error:" + error);
})