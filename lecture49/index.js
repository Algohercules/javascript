// object cloning :---

// let obj = {
//     age:12,
//     wt:36,
//     ht:45
// }

// console.log(obj)

// obj.color = "white"

// console.log(obj);

//cloning : spred oprtr,

//spread operator :--

 let src = {
         age:12,
         wt:36,
         ht:45
  }

let destination = {...src}

src.age = 90;

console.log("src:", src);
console.log("destination:", destination)