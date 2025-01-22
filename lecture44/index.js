// let obj = {
//     "name":"adarsh",
//     age : 25,
//     weight : 85,
//     height : "6 feet 1 inch",
//     greet: function() {
//         console.log("hello ji kaise ho saare")
//    }
// };
// console.log(obj)
// obj.greet();

// //ARRAYS:--

//  let arr = [1,2,3,4,5]


//built-in properties:--

// arr.push(8)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift('adarsh')
// console.log(arr)

// arr.slice(starting_index,ending_index)
// console.log(arr.slice(2,4))


//slice:--
// arr.splice(1,2,"adarsh")
// console.log(arr)

//mapping:--

// let arr = [10,20,30];

//  let ansArray = arr.map( function (number) {
//     return number*number;
// })
// console.log(ansArray)


//filter:--
// let arr = [10,20,30,11,21,44,51]
//  let evenArray = arr.filter( function (number){
//     if(number%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(evenArray)

//or

// let arr = [10,20,30,11,21,44,51];
//  let evenArray = arr.filter((number)=>{
//    return number%2 === 0;
// });

// console.log(evenArray)



//reduce:--

// let arr =[10,20,30,40]

// let ans = arr.reduce((acc,crr)=>{
//     return acc + crr;
// }, 0)

// console.log(ans)


//sorting:--

// let arr = [9,1,4,6,3,2,7,5,8]
// arr.sort();
// console.log(arr)


// index-of:--

// let arr = [9,1,4,6,3,2,7,5,8]
//  arr.sort();
//  console.log(arr.indexOf(9));


//for-each:--

let arr = [10,20,30];
arr.forEach((value,index) => {
    console.log("number:", value, "index:", index);
});



// for-in:--

// let obj = {
//     "name":"adarsh",
//     age : 25,
//     weight : 85,
//     height : "6 feet 1 inch",
//     greet: function() {
//         console.log("hello ji kaise ho saare")
//     }
// }

// for(let key in obj){
//     console.log(key," ", obj[key]);
// }

// for-of :--

// let arr =[10,20,30,40];
//    for(let value of arr){
//     console.log(value);
//    }


//arrays with functions :--

// let arr =[10,20,30,40,50]
// function getSum(arr){
//     let length = arr.length;
//     let sum = 0;
//     for(let index=0; index<length; index++){
//         sum = sum + arr[index];
//     }
//     return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum)