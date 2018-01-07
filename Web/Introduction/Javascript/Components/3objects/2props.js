/* -------- object properties -------- */
//Dags att prata om writable, enumerable och configurable.

//Writable
function Person(name, age){
  this.name = name;
  this.age = age;
}

Person.prototype.roar = function(){
  return "rooooar";
}

var person = new Person('Jakob', 23);

//Bör inte sättas på prototype då detta skulle hindra en från att skapa nya objekt där konstruktor "name" ges.
Object.defineProperty(person, 'name', {writable : false});


//fel-meddelande visas endast i strict-mode
person.name = "Agnes";

alert(person.name);


//Enumerable, tar bort property:n från listor, går fortfarande att nå via dot notation
function Person(name, age){
  this.name = name;
  this.age = age;
}

Person.prototype.roar = function(){
  return "rooooar";
}

var person = new Person('Jakob', 23);

Object.defineProperty(person, 'name', {
    enumerable : false,
});


var propertyDesc = Object.getOwnPropertyDescriptor(person, 'name');

for(var propValue in propertyDesc){
    alert(propValue + ": " + propertyDesc[propValue]);
}

//Name är bortagen
for(var property in person){
    alert("Property: " + property + ", property value: " + person[property]);
}


//Configurable
function Person(name, age){
  this.name = name;
  this.age = age;
}

Person.prototype.roar = function(){
  return "rooooar";
}

var person = new Person('Jakob', 23);

Object.defineProperty(person, 'name', {
    configurable : false,
});

alert(person.name);
delete person.name; //ta bort configurable, tar bort person.name property:n
alert(person.name);


Object.defineProperty(person, 'name', { //går att ändra writable
    enumerable : false, //Kan inte ändra enumerable
    configurable : true //kan inte ändra tillbaks configurable
})

var propertyDesc = Object.getOwnPropertyDescriptor(person, 'name');

for(var propValue in propertyDesc){
    alert(propValue + ": " + propertyDesc[propValue]);
}

//Namn är bortagen
for(var property in person){
    alert("Property: " + property + ", property value: " + person[property]);
}
