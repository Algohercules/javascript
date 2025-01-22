//hoisting:--
// The process you're referring to is known as "hoisting" in JavaScript. Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use variables and functions before they are declared in the code.


// sayMyName("babbar")
// function  sayMyName(finalName){
// console.log(finalName)
// }



// console.log(age);
// var age = 255;

// output is undefined because it is variable scoping. here 
// of variable gets declared but its value is not assigned to the variable thats why 25 is not printed whereas in case of functions the whole function gets hoisted(moved to top of its container) 

//using let and cons keyword:---

// console.log(age)
// let age = 25;

// the output is erroe because the hoisting is only possible in case of var type variablem and not in the case of let & cons.


// function hoisting is only posssible in this way of expression the other two ways are not included in the hoisting.

// sayHello()
// let sayHello = function(){
//     console.log("hello ji kaise ho saare")
// }
// // output is error

 //hoisting in class is not possible
   



 //function call stack :---

//  in stack the data is stored in the container in the LIFO format

// LAST IN FIRST OUT

//stack memory 

// function is called first class citizen bcz there are various properties in which a function can be utilised such as;
// assign to variable
// as an argument
// return function
// use function in data structures
// used as a property


//assigning function to a variable :--
// let greet = function (){
//     console.log("greeeting of the day")
// }
// greet();

//passing a function

// function greetMe(greet,fullName){
// console.log("hello", fullName);
// greet();
// }

// let greet = function (){
//         console.log("greeeting of the day")
// }

// greetMe(greet, "adarsh")

