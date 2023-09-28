// IIFE : Immediately Invoked Function Expression.

(function add(a, b){
    console.log(a + b);
})(4, 5);                  // Immediately Invoked...


(function saySomthing(){
    console.log('hey');
})();                     // Immediately Invoked...

// Modern Way :-
(() => console.log("I am Es6"))();


const value = (() => 100)();
console.log(value);


// Use of IIFE :-
// Avoid Polluting the globle namespace.


const data = (async () => await fetch())();

// Module Pattern:
// Atm machine

const atm = function (initialBalance){
    let balance = initialBalance;
    function withdraw(atm){
        if(atm > balance){
            console.log("Are you kidding ?");
        }
        else{
            balance -= atm;
            return balance;
        }
    }
    return {withdraw};
};

const prince = atm(1000);
console.log(prince.withdraw(100));
console.log(prince.withdraw(100));
console.log(prince.withdraw(100));
console.log(prince.withdraw(100));

