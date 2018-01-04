/** prototypes **/


/*
var arr = ['pie', 'tacos', 'ham'];

alert(arr.prototype); //undefined
alert(arr.__proto__); //Arrays prototype

//Illustration
function Car(owner, age){
    this.owner = owner;
    this.age = age;
}

var rolfV = new Vehicle('Rolf', 2);
var karlV = new Vehicle('Karl', 3);

rolfV.name = 'Agnes';

Vehicle.prototype.window = 'dark';
rolfV.window = 'light';

alert(rolfV.window);
alert(rolfV.__proto__.window);
*/

function Dog(name){
  this.name = name;
}

Dog.prototype.age = 3;

var dog = new Dog('Linda');

console.log('The dog');
console.log(dog);

console.log('\nDogs prototype the wrong way');
console.log(dog.prototype);

console.log('\nDogs prototype the right way');
console.log(dog.__proto__);

console.log('\nThe dog prototype');
console.log(Dog.prototype);