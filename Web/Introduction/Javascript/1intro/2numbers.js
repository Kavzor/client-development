/* --------- Numbers --------- */

//Notera att strängar konkatiseras på samma sätt
alert("Result: " + 1 + 4);

//Löser det med en Number funktions anrop
alert("Result: " + Number(1 + 4));

//Eftersom textsträngen result inte är en siffra ges NaN, NaN + 5 = NaN
alert(Number("Result: " + 1 + 4));

//Vi kan kontrollera om ett tal är ett tal med isNaN()
alert(isNaN(Number("Result: " + 1 + 4)));

//Var försiktig med flyttal, inom double float point representation (64-bits) som javascripts specifikation ger så kan visa "oönskade" beteende uppstå.
alert(0.2 + 0.1);

//Kan lösa detta genom att plocka bort decimaler
alert((0.2 + 0.1).toFixed(2));

//toFixed avrundar (OBSERVERA), den klipper inte som javas integer
alert((0.3 + 0.099).toFixed(1));
alert((0.3 + 0.049).toFixed(1));


//Math hjälp klassen, fungerar som i java
alert(Math.sin(Math.PI));

//Math.random() generar ett flyttal (16-tecken) mellan [0, 1)
alert(Math.random() * 10);
