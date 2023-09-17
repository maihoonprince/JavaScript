// Object is a group of key : value pair
// key : value --> Property
// Key : Function --> Method


// how to create Object:-
let cap ={
    name: "steve",
    lastName: "Rogers",
    address: {
        city: "Manhatten",
        state: "New York"
    },
    age: "100 Year",
    isAvenger: true,
    movies:["First Avanger", "Winter Solider", "Civil War"],     // array in Object
    sayHello : function(){                                       // Function in Object
        console.log("Cap Say's Hello");
    }
};

// how to access object :- 
console.log(cap.name);
console.log(cap.age);
console.log(cap.movies);
console.log(cap.address);
console.log(cap.movies[1]);                         // we can access object by array index...
cap.sayHello();                                     // function call in object.

// How to Update and Add method and Property in Object :-

// Print whole Object before adding elements :-
console.log("cap:", cap);

// Adding and Updating object :-
cap.age = "120 Year";
cap.isAvenger = false;
cap.friend = ["Tony", "Bruce", "bucky", "Peter"];

// Print whole Object after adding elements :-
console.log("cap:", cap);


// How to delete Key:--
delete cap.age                                  
console.log("cap:", cap);                         // age deleted from Object

// Loop in Object :--
for(let key in cap){
    console.log(key, ":", cap[key]);
}


console.log(cap.xyz);                            // Output will be Undefined
