function poleP() {
    let a = document.getElementById("aP").value;
    let b = document.getElementById("bP").value;
    return document.getElementById("poleP").innerHTML = a*b;
}
function obwodP() {
    let a = document.getElementById("aP").value;
    let b = document.getElementById("bP").value;
   return document.getElementById("obwodP").innerHTML = 2*a+2*b;
}
function poleT() {
    let a = document.getElementById("aT").value;
    let b = document.getElementById("bT").value;
    let c = document.getElementById("cT").value;
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
   return document.getElementById("poleT").innerHTML = (a+b+c)/2;
}
function obwodT() {
    let a = document.getElementById("aT").value;
    let b = document.getElementById("bT").value;
    let c = document.getElementById("cT").value;
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
   return document.getElementById("obwodT").innerHTML = a+b+c;
}