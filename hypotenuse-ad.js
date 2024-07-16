//.value is used to select the current value from the inputbox,textarea ,select

let a;
let b;
let c;

document.getElementById("btn").onclick = function () {
    a = document.getElementById("atextbox").value;
    a = Number(a);

    b = document.getElementById("btextbox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    c = document.getElementById("clabel").innerHTML = "side C :" + c;
}