// Array declare
// let arr = [];

let array = [34, 4, 5, 45, 65, 888, 947];
console.log(array);
console.log(array.length);

let i = 0;
while(i<array.length){
    console.log("element at index",i, "is", array[i]);
    i++;
}

// Push   :- adds element in last.
//unshift :- adds element in starting.

array.push("last value");
array.unshift("First value");
console.log(array);

//Pop   :- Delete element from End.
//Shift :- Delete element from starting.

array.pop();
array.shift();
console.log(array);

// Slice  :- Part of array, it gives element in between start iindex and ending index.

let partOfArray = array.slice(2,6);
console.log(partOfArray);

// Splice :- it delete elements from given index to number of element provided by user.

array.splice(2, 3);
console.log(array);

// Index of  :-
// Contain   :-