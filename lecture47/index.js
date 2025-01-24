// classes and default parameters

// classes are the blueprints in which it is defined that which of the data members are going to be stoerd for a particualr entity

// the actual data created of the classes are known as the  object



class human {

     //properties 

     
    age = 13;   //public
    #weight = 80;   //private
    height = 107;

    //constructor

    constructor( newAge , newHeight){
        this.age = newAge;
        this.height = newHeight;

    }

    //behaviour

     walking (){
        console.log("i am adarsh");
     }

     running (){
        console.log("i am running");
     }

     get fetchWeight(){
        return this.#weight;
     }

     set modifyWeight(value){
        this.#weight = value;
     }
}

let obj = new Human( 50 , 190);
console.log(obj.height);
obj.walking();

//weight can only be accessed in the class block



// to use a private variable outside of its block we use the concept of getters and setters




// if we havent initialised the variable and have only declared it 
// then to initialise  a vaiable we use constructor as a function

