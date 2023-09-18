// String :- 

let singleQuotes = 'single quotes ki string';
let doubleQuotes = "Double quotes ki string";

console.log(singleQuotes);
console.log(doubleQuotes);

let char = singleQuotes.charAt(4);
let asciiCode = singleQuotes.charCodeAt(4);
let substr = singleQuotes.substring(2, 8);
console.log(char);
console.log(asciiCode);
console.log(substr);

// Function in String :-
// 1.Split  and  2.Joint
// Split :- we can change string into array by the help of any character present in String.

let arrStr = singleQuotes.split("i");
console.log(arrStr);

let arrStr1 = singleQuotes.split(" ");
console.log(arrStr1);

let arrStr2 = singleQuotes.split("");    // if we don't provide any character or space then it will convert whole string character-wise array.
console.log(arrStr2);

// Joint :- Help in join the string on the basis of what we splited previously.

let arrStr3 = singleQuotes.split("i");    // if we don't provide any character or space then it will convert whole string character-wise array.
console.log(arrStr3);
let string = arrStr3.join("+");
console.log(string);

// trim  :- it remove white spaces from beginning and end of string.

let spacedQutoes = "   Spaced qutoes is here   ";
let string2 = spacedQutoes.trim();
console.log(string2);
