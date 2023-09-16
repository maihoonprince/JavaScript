//print
console.log("Jai Sri Krishna");

//declare variable
let a;
a = 10;
a = 20.5;
a = "String";
console.log(a);

//Variable's:--
// Primitive types: number, string, boolean, null
// loops are same like we are using in c++ or java....
let num = 10;
for(let i=0; i<num; i++){
    console.log("Happy, to learn js...");
}

// Code to check prime number:--
let num2 = 67;
let flag = true;
for(let i=2; i<num2; i++){
    if(num2 % i == 0){
        flag = false;
    }
}
if(flag == true){
    console.log(num2 + " " +"is a prime number");
}
else{
    console.log(num2 + " " + "is not a prime number");
}

