/* --------- Objects --------- */
/*
Tre stycken object i javascript

Host objects: (Enviroment objects, webbläsarens object)
 - Document
 - Window
 - Element
 - Event
 - Node
 - Comment
 - Console

 Core objects: (Inbyggt i javascript)
  - Building blocks: Math, Object, String, Boolean..

  Author objects: objekt som kodaren skapar eller får från externa bibliotek
*/

//Enklaste sättet att skapa objekt
var person = new Object();
person.name = "jakob";
person.age = 23;

alert(person.name);

//(Object literal) Ett lite mer utvecklat exempel
var person = {
    name : 'Jakob',
    age : 23,
    roar : function() { //Lagrar funktioner på variabler
        return "Rooooooar";
    },
    preferences : {
        color : 'blue',
        dish : 'tacos'
    }
}

alert(person.name + " likes the dish " + person.preferences.dish +
    "\n when he's done eating he'll yell " + person.roar());

//Constructor functions, this är speciell i javascript, den hänvisar till det objekt som för tillfället styr
//Problemet med att skapa objektet på detta sätt är att varje gång new AirPlane() anropas så skapas toString funktionen
function AirPlane(name, number){
    this.name = name;
    this.number = number;

    this.toString = function () {
        return this.name + ' #' + this.number;
    }
}

var plane = new AirPlane("SAS", 42);
alert(plane.toString());

//Ett sätt att slippa återskapa toString varje gång
function Plane(name, number){
    var age = 23;
    this.name = name;
    this.number = number;

    //kommer att kolla på hur man gör "riktiga" getters i javascript
    this.getAge = function (){
        return age;
    }
}

Plane.prototype.toString = function(){
    return this.name + ' #'  + this.number + ', in service for ' + this.getAge() + ' years';
}

var plane = new Plane("Norwig", 102);
alert(plane.toString());

//Det som händer när vi skapar ett objekt, obereonde om det är via object literal eller cunstructor functions är i grunden följande
var person = Object.create(Object.prototype, {
   name : {
       value: 'Jakob',
       enumerable: true,
       writable: true,
       configurable: true
   },
    age : {
       value: 23,
       enumerable: true,
       writable: true,
       configurable: true
    },
  roar : {
      value: function(){
          return "roooar";
      },
      enumerable: true,
      writable: true,
      configurable: true
  }
});


alert(person.roar());

//Att 'behind the scence' samma sak händer här, kan du se genom att anropa objects getOwnPropertyDescriptor(object, property)
var propertyDesc = Object.getOwnPropertyDescriptor(person, 'name');

for(var prop in propertyDesc){
    alert(prop + ": " + propertyDesc[prop]);
}
