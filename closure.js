// it is a important topic which will be always asked in js interview.
// always asked topic of js.

// Closure : it is the combination of function bundled together with references to its surrounding state.

function what(){
    const name = "Prince";
    function displayName(){
        console.log(name);
    }
    displayName();   // Function k andar Function
}

what();         

// profit :

function main(name){
    function sayMyName(){
        console.log(name);
    }
    return sayMyName;
}

let consoleName = main("Bharat");

consoleName();



// Adder :-

function adder(num) {
    function add(b) {
        console.log(num + b);
    }

    return add; // Note: We're returning the 'add' function itself, not invoking it.
}

const addTo5 = adder(5);

addTo5(2); // Now we invoke 'addTo5' to add 2 to 5.


 const myName = document.getElementById("myName");
 const btn = document.getElementById("my-btn");

 function makeTextSizer(size) {

    function changeSize(){
        myName.style.fontSize = `${size}px`;
    }

    return changeSize;
    
 }

const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size52 = makeTextSizer(52);
const size500 = makeTextSizer(500);

// btn.addEventListener("click", size500);
btn.addEventListener("click", () => {
    size500();
});
