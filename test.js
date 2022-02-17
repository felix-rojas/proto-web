// not-typed language
// variables, constants, console

let numero_cervezas = 0;

console.log(numero_cervezas) 
console.info(numero_cervezas)
console.warn(numero_cervezas)
console.error(numero_cervezas)

// for loop with local variable
for (let i = 1; i <=10; i++){
    console.log(i);
}

console.log(i)

// for loop with global variable
for (var j = 1; i <=10; i++){
    console.log(j);
}
console.log(j)

// use constants to avoid modifying the variable such that
// constants are declared within the scope, just like let
const constant_beer = 2;

// to pop a message within the window
alert("Hello!");
const ClientName = prompt("What's your name?");
console.log("Hello, "+ ClientName);

// boolean true / false for method confirm
const answer = confirm("Is this window annoying?");

// function creation
function apologize() {
    console.log("Sorry about that");
}

if (answer == true) {
    apologize();
}

// modern functions
// creates a pointer to a function
const modern_apology = () => console.log("Machines don't apoogize");
modern_apology(); // execute function

document.getElementById("body").onclick =  modern_apology;

