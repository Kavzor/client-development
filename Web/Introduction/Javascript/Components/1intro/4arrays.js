/* --------- Arrays --------- */

var array = new Array();
array.push("hello");
array.push("world");

alert(array);

//OBSERVERA, skapar en array med 10 tomma platser
array = new Array(10);
array.push("hello");
array.push("world");

alert(array);

//Samma som new Array(), användbar då du har start-värden
array = [10];
array.push("hello");
array.push("world");

alert(array);

//flertal sätt att itererar listor
for(var index = 0; index < array.length; index++){
    alert(array[index]);
}

//prova, byt var till let
alert(index);

for(var value of array){
    alert((value));
}

array.forEach((value, index) => {
   alert(value);
});