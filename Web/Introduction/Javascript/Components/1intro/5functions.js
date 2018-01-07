/* --------- Funktioner --------- */

function subtraction(a, b){
    return a - b;
}

alert(subtraction(4, 7));
alert(subtraction()); //undefined

//Default paramtetrar
function addition(a = 0, b = 0){
    return a + b;
}

alert(addition(4, 7));
alert(addition());

//IIFE Immediately invoked function expression
//Användbara för att begränsa scope:t på något som måste skapas vid start, körs så snart den skapas
(function (){
  alert("I will appear as I am created");
})();
