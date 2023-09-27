// Curring : 

function adder(a){
    return function(b){
        return function(c){
            return a + b + c;
        };
    };
};

console.log(adder(87)(5)(4));       // this way is called curring.

// Practical Use:

// function sendAutoEmail (to){
//     return function (subject){
//         return function (body){
//             console.log(`Sending Email to ${to}, ${subject}, ${body}`);

//         };
//     };
// };


// Modern way or curry : 

// for email :-
const sendAutoEmail = (to) => (subject) => (body) => `Sending Email to ${to} with subject ${subject}: ${body}`;

let step1 = sendAutoEmail("prinxvibe@gmail.com");
let step2 = step1("New order confirmation");

console.log(step2("Hey Prince, Here is somthing for you"));


//for adder:
const add = (a) => (b) => (c) => a+b+c;
console.log(add(3)(5)(6));