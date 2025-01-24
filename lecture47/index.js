// classes and default parameters

// classes are the blueprints in which it is defined that which of the data members are going to be stoerd for a particualr entity

// the actual data created of the classes are known as the  object



class human {

     //properties 

     
    age = 13;   //public
    #weight = 80;   //private
    height = 107;

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

let obj = new Human();
console.log(obj.age);
obj.walking();

//weight can only be accessed in the class block



// to use a private variable outside of its block we use the concept of getters and setters




