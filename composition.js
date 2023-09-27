// Composition: 

function add(a, b){           // function for addition of numbers.
    return a+b;
}

function sqr(val){            // function for squaring of a number.
    return val*val;
}

// function multiply(a, b){
//     return a*b;
// }

function multiply (args){
    return args[0] * args[1];
}

const addResult = add(4, 5);  // storing result of addintion in a veriable name addResult.
console.log(sqr(addResult));  // inputing added result as a input in squaring function and then printing it in console.

function adTwoAndSqr(a,b){
    return sqr(add(a, b));
}

 console.log(adTwoAndSqr(5,5));

// omposition of function

function composeTwoFunction(fn1, fn2){
    return function(a, b){
        return fn2(fn1(a, b));
    };
}

//const task = composeTwoFunction(add, sqr);
//const task2 = composeTwoFunction(multiply, sqr);
0
//console.log(task(2, 4));
//console.log(task2(2, 4));

// Modern JavaScript:

//const c2f = (fn1, fn2) => (a, b) => (fn2(fn1(a, b)));
//const task3 = c2f(multiply, sqr);

//console.log(task3(2, 3));


// How to create multiple function :-

function compose (...fns){
    return function (...value){
        return fns.reduce((a, b) => b(a), value);
    };
}

const c2f = (fn1, f2) => (a, b) => f2(fn1(a, b));
const task3 = compose(multiply, sqr);

console.log(task3(2, 3));