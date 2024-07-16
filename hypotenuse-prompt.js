//declaring 3 variables for triangle sides

let a;
let b;
let c;

a = prompt("Enter a value for side A","0");
a = Number(a);

b = prompt("Enter  a value for side A","0");
b = Number(b);

// to find c 
c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
console.log("the value of side C :",c);