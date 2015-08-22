function pocetak () {
alert ("Adidas naravno");
}

function adidas () {
var prva = prompt("Upiši 'Adidas' ");
var druga = prompt("Upiši 'Nike'");
alert(prva + " je bolji od " + druga + " za " + 
Math.random()*100 + " %");

}

function dodaj () {
var lista = document.getElementById("lista");
var stavka = document.createElement("li");
var tekst = document.createTextNode("Adidas");
stavka.appendChild(tekst);
lista.appendChild(stavka);
}