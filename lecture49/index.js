// object cloning :---

// let obj = {
//     age:12,
//     wt:36,
//     ht:45
// }

// console.log(obj)

// obj.color = "white"

// console.log(obj);





//cloning : 


//spread operator :--

//  let src = {
//          age:12,
//          wt:36,
//          ht:45
//   }

// let destination = {...src}

// src.age = 90;

// console.log("src:", src);
// console.log("destination:", destination)


// the difference between copying and the cloning



//spread operator :--

//  let src = {
//          age:12,
//          wt:36,
//          ht:45
//   }

// let destination = src;

// src.age = 90;

// console.log("src:", src);
// console.log("destination:", destination)



// // assign operator :---



//   let src = {    
//          age:12,
//          wt:36,
//           ht:45
//    }

    // let src2 = {
    //     value : 101;
    //     name : "adarsh"
    // }

// let destination = Object.assign({}, src, src2)

//  src.age = 90;

//   console.log("src:", src);
//  console.log("destination:", destination)


// iteration method :

// not a prefferable method

// let src = {
//     age : 12,
//     weight : 35,
//     height : 596

// }

// let destination = {}

// for(let key in src){
//     let newKey = key;
//     let newValue = src[key];

//     destination [newKey] = newValue;

//     console.log("src:", src);
//     console.log("destination", destinatio);
// }