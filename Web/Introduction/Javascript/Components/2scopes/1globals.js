/* --------- Global Scopes -------- */

//prova
alert(this); //Window object

this.alert(this); //samma som ovan

window.alert(this); //samma som ovan

function alert(message){
    console.log(message);
}

window.alert(this);

/*
window.prototype.alert = function (message){
    console.log(message);
} //beroende på var du skriver koden

Var försiktig så att du inte skriver över window objektet
Liknande problem kan uppstå med:
var example = 2;
    ...
var example = "hello world";

'use strict' förhindrar detta

Poängen är, skriv så inkaplsat som möjligt
*/
