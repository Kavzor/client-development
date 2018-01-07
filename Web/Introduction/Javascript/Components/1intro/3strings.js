/* --------- Strings --------- */

//Du kan skapa strängar på two sätt
alert(new String("Hello World"));

alert("Hello World");

//Skillnaden är vad för typ strängen antar
alert(typeof new String("Hello World"));

alert(typeof "Hello World");

alert("hello world".length);
alert("hello world".substr(0, 4));
alert("hello world".substr(6));

//Notera att det är 0-indexerat
alert("hello world".charAt(4));
alert("hello world"[2]);