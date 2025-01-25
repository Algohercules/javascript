//  any event due to which disrupts the normal flow of running of progrsm is called as error

 


// //compile time error
// //syntax error
// console.log(1;




// //run time error
// //reference error
//     console.log(x);


//try and catch block :---

// try{
//     console.log("try block starts here");
//     console.log(x);
//     console.log("try block ends here");
//     //error ke niche ki koi bhi lione execute nhi hoti
// }

// catch(error){
//         //   error ka kya karna hai??
//           //retry logic 
//           //fallback mechanism
//           //custom error
//           console.log("i am inside catch block");
//           console.log("your error is here", error);

// }

// finally block :---


// this will run everytime either ther ei s an error or not

try{
    console.log("i am inside try block");
    console.log(x);
    console.log("try block ends here");
    //error ke niche ki koi bhi lione execute nhi hoti
}

catch(error){
        //   error ka kya karna hai??
          //retry logic 
          //fallback mechanism
          //custom error
          console.log("i am inside catch block");

}

finally {
    console.log("i will run everytime");
}