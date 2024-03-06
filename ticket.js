let age = prompt('qual è la tua età?');
let distance = prompt('quanti km devi percorrere?');
let price = distance * 0.21;
console.log(price);
if (age < 18) {
    document.getElementById("ticket").innerHTML= 'il costo del biglietto è' (price * 0.8);
    console.log(price * 0.8)
}
else if (age > 65) {
    document.getElementById("ticket").innerHTML= 'il costo del biglietto è' (price * 0.6);
}
else {
    document.getElementById("ticket").innerHTML= 'il costo del biglietto è' (price);
}
