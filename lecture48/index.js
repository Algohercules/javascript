// classes and default parameters

// classes are the blueprints in which it is defined that which of the data members are going to be stoerd for a particualr entity

// the actual data created of the classes are known as the  object



// class human {

//      //properties 

     
//     age = 13;   //public
//     #weight = 80;   //private
//     height = 107;

//     //constructor

//     constructor( newAge , newHeight){
//         this.age = newAge;
//         this.height = newHeight;

//     }

//     //behaviour

//      walking (){
//         console.log("i am adarsh");
//      }

//      running (){
//         console.log("i am running");
//      }

//      get fetchWeight(){
//         return this.#weight;
//      }

//      set modifyWeight(value){
//         this.#weight = value;
//      }
// }

// let obj = new Human( 50 , 190);
// console.log(obj.fetchWeight);
// obj.walking();

//weight can only be accessed in the class block



// to use a private variable outside of its block we use the concept of getters and setters




// if we havent initialised the variable and have only declared it 
// then to initialise  a vaiable we use constructor as a function

//default parameters allows to use functions with default values



// function sayName (myName = "prabhudeva"){
//     console.log("my name is ", myName);
// }

// sayName(adarsh);

//prabhudeva is acting as a default parameter, if any value is not passed then prabhudewa is printed but if thre value is pased then the vlaue will be printed


// function solve(value){
//     console.log("hello ji", value);
// }

// solve(15);


//function as a default parameter :--

// function getAge(){
//      return 190;    
// }


// function utility( name = "love" , age = getAge()){
//     console.log(name," ", age);

// }

// utility()