// variable scoping :---



// global:--
// var age = 15;
 
// {
//     console.log(age)

// }

// if(true)
// {
//     console.log(age)
// }

// for( let i =0; i<=2; i++)
// {
//    console.log(age)
// }

// function sayHello()
// {
//     console.log("hi", age);
// }

// sayHello();

// it means that a globally scoped variable can be used at many preferences 
// this rule is applied for let, cons, var all the keywords



// function scoped :--

// function sayHello (){
//     var fullName = "earth";
//     console.log("hello duniya", fullName)
// }

// sayHello();

// console.log(fullname)


//block scoped :--

// {
// var height = 180;
// }

// console.log(height)

// it means that var keyword is not block scoped even if it is int he box it  can be accessed outside of blpock & let and cons are block scoped



// temporal dead zone---

// console.log("love");
// console.log("adarsh");
// console.log(marks)
// let marks = 100;


// line No. 61 to 64 are temporal dead zone it means that the variables created by let and cons keyword are not able to be hoisted

