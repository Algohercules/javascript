// promise :---
// the promise object represents the eventual completion or fsilure of an asynchronous code and its resulting value

//  resolve/fulfill State
//  reject state

// let firstPromise = new Promise ((resolve , reject) => {
//     console.log("babbar")
//     resolve(1001)

// })


 let firstPromise = new Promise ((resolve , reject) => {
function sayMyName(){
      console.log("my name is adarsh")
}

setTimeout(sayMyName, 10000)
})