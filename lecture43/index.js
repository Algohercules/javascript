//function

// syntax-->  function function_name (parameters)
// {
//.................
// }


// function sayMyName(){
//     console.log("adarsh rai")
// }

// sayMyName();

// function printCounting(){
//     for(let i=1; i<=100; i++){
//            console.log(i);
//     }
// }

// printCounting();


// function printNumber(num){
//     console.log("printing number", num);
// }

// printNumber(100);

//num is a parameter and 100 is an argument

// function getAverage(num1,num2){
//     let avg = (num1 + num2)/2;
//     console.log("average:", avg);
// }

// getAverage(3,7)

//return functions

function getSum(a,b,c){
    let sum = a + b + c;
    return sum;
}

let ans = getSum(1,2,3);
console.log("sum is:", ans)